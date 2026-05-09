/**
 * Wave A: merge Lighthouse lab runs, HEAD-check URLs, summarize schema from raw HTML.
 * Run from repo root: node scripts/wave-a-generate.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const SITEMAP_URLS = [
  'https://www.ubirtai.site/',
  'https://www.ubirtai.site/motivation',
  'https://www.ubirtai.site/health',
  'https://www.ubirtai.site/sports',
  'https://www.ubirtai.site/about',
  'https://www.ubirtai.site/blog',
  'https://www.ubirtai.site/contact',
  'https://www.ubirtai.site/privacy-policy',
  'https://www.ubirtai.site/terms-of-service',
]

function readLhBasename(name) {
  const p = join(root, name)
  if (!existsSync(p)) return null
  return JSON.parse(readFileSync(p, 'utf8'))
}

function pickMetrics(lhr) {
  const a = lhr?.audits ?? {}
  const num = (id) => {
    const v = a[id]?.numericValue
    return typeof v === 'number' ? Math.round(v * 1000) / 1000 : null
  }
  const display = (id) => {
    const s = a[id]?.displayValue
    if (s == null) return null
    return String(s).replace(/\u00a0/g, ' ').trim()
  }
  return {
    performanceScore: lhr?.categories?.performance?.score ?? null,
    firstContentfulPaintMs: num('first-contentful-paint'),
    firstContentfulPaint: display('first-contentful-paint'),
    largestContentfulPaintMs: num('largest-contentful-paint'),
    largestContentfulPaint: display('largest-contentful-paint'),
    totalBlockingTimeMs: num('total-blocking-time'),
    totalBlockingTime: display('total-blocking-time'),
    cumulativeLayoutShift: num('cumulative-layout-shift'),
    cumulativeLayoutShiftScore: display('cumulative-layout-shift'),
    serverResponseTimeMs: num('server-response-time'),
    serverResponseTime: display('server-response-time'),
    maxPotentialFIDMs: num('max-potential-fid'),
    maxPotentialFID: display('max-potential-fid'),
  }
}

async function headStatus(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow' })
    return { url, status: res.status, ok: res.ok, finalUrl: res.url }
  } catch (e) {
    return { url, status: null, ok: false, error: String(e?.message ?? e) }
  }
}

function extractJsonLdFromHtml(html) {
  const blocks = []
  const re =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  let m
  while ((m = re.exec(html)) !== null) {
    const raw = m[1].trim()
    try {
      blocks.push(JSON.parse(raw))
    } catch {
      blocks.push({ parseError: true, rawSnippet: raw.slice(0, 200) })
    }
  }
  return blocks
}

async function main() {
  const localHome = readLhBasename('.wave-a-lh-local-home.json')
  const localAbout = readLhBasename('.wave-a-lh-local-about.json')
  const localBlog = readLhBasename('.wave-a-lh-local-blog.json')
  const prodHome = readLhBasename('.wave-a-lh-home.json')

  const baseline = {
    generatedAt: new Date().toISOString(),
    methodology:
      'Lab metrics from Lighthouse 12 performance category (desktop preset where noted). URLs use local Vite preview (SPA fallback) when production deep links return 404. INP is primarily a field metric; lab uses TBT and max-potential-FID as proxies.',
    targets: {
      LCP_ms_good: 2500,
      INP_ms_good: 200,
      CLS_good: 0.1,
    },
    environments: {
      production_homepage: prodHome
        ? pickMetrics(prodHome)
        : { note: 'Run npx lighthouse https://www.ubirtai.site/ ... to refresh' },
      vite_preview_desktop: {
        note: 'http://127.0.0.1:4173 — npm run preview after npm run build',
        pages: {
          '/': localHome ? pickMetrics(localHome) : null,
          '/about': localAbout ? pickMetrics(localAbout) : null,
          '/blog': localBlog ? pickMetrics(localBlog) : null,
        },
      },
    },
    passFail_vs_targets_lab: (() => {
      const p = localHome ? pickMetrics(localHome) : {}
      const lcp = p.largestContentfulPaintMs
      const cls = p.cumulativeLayoutShift
      const tbt = p.totalBlockingTimeMs
      return {
        LCP_at_or_below_2500ms:
          lcp == null ? 'unknown' : lcp <= 2500 ? 'pass' : 'needs_improvement',
        CLS_below_0_1:
          cls == null ? 'unknown' : cls < 0.1 ? 'pass' : 'needs_improvement',
        TBT_proxy_for_input_latency_ms: tbt,
        notes:
          'Official INP requires CrUX field data or PageSpeed Insights field section.',
      }
    })(),
  }

  mkdirSync(join(root, 'seo-deliverables'), { recursive: true })
  writeFileSync(
    join(root, 'seo-deliverables', 'core_web_vitals_baseline.json'),
    JSON.stringify(baseline, null, 2),
    'utf8',
  )

  const heads = []
  for (const u of SITEMAP_URLS) {
    heads.push(await headStatus(u))
  }

  let prodHtml = ''
  try {
    const r = await fetch('https://www.ubirtai.site/')
    prodHtml = await r.text()
  } catch (e) {
    prodHtml = `<!-- fetch failed: ${e} -->`
  }

  const jsonLdBlocks = extractJsonLdFromHtml(prodHtml)
  const typesFound = jsonLdBlocks.flatMap((b) => {
    if (b['@graph']) {
      return b['@graph'].flatMap((x) => {
        const t = x['@type']
        if (Array.isArray(t)) return t
        return t ? [t] : []
      })
    }
    const t = b['@type']
    if (Array.isArray(t)) return t
    if (t) return [t]
    return []
  })

  let distGraphTypes = []
  const distIndex = join(root, 'dist', 'index.html')
  if (existsSync(distIndex)) {
    const distHtml = readFileSync(distIndex, 'utf8')
    const distBlocks = extractJsonLdFromHtml(distHtml)
    distGraphTypes = distBlocks.flatMap((b) => {
      if (b['@graph']) {
        return b['@graph'].flatMap((x) => {
          const t = x['@type']
          if (Array.isArray(t)) return t
          return t ? [t] : []
        })
      }
      const t = b['@type']
      if (Array.isArray(t)) return t
      if (t) return [t]
      return []
    })
  }

  const schemaReport = {
    generatedAt: new Date().toISOString(),
    googleRichResultsTestUrls: [
      'https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.ubirtai.site%2F',
    ],
    manualSteps:
      'Paste each primary URL into Google Rich Results Test after deploy. Automated HTTP fetch only sees initial HTML.',
    initialHtmlJsonLd: {
      blocksFound: jsonLdBlocks.length,
      schemaTypesInSource: [...new Set(typesFound)],
      schemaTypesInLocalDistBuild: [
        ...new Set(distGraphTypes),
      ],
      deployMayBeBehindRepo:
        distGraphTypes.length > 0 &&
        [...new Set(typesFound)].join() !== [...new Set(distGraphTypes)].join(),
      organizationPresent: typesFound.some((t) =>
        String(t).includes('Organization'),
      ),
      softwareApplicationPresent: typesFound.some((t) =>
        String(t).includes('SoftwareApplication'),
      ),
      faqPageInInitialHtml: jsonLdBlocks.some((b) => {
        const g = b['@graph']
        if (Array.isArray(g))
          return g.some((x) => x['@type'] === 'FAQPage')
        return b['@type'] === 'FAQPage'
      }),
    },
    clientRenderedSchemaNote:
      'FAQPage and BreadcrumbList JSON-LD are injected via react-helmet-async after hydration; they will not appear in a raw HTML-only fetch. Rich Results Test executes JavaScript and should still detect them on the live URL.',
    validationStatus: 'manual_confirmation_required',
  }

  writeFileSync(
    join(root, 'seo-deliverables', 'schema_validation_report.json'),
    JSON.stringify(schemaReport, null, 2),
    'utf8',
  )

  const crawlLines = ['url,http_status,final_url_or_error,notes']
  for (const h of heads) {
    const note =
      h.status === 404 && h.url !== 'https://www.ubirtai.site/'
        ? 'Likely SPA: configure host to serve index.html for all routes'
        : ''
    crawlLines.push(
      `"${h.url}",${h.status ?? ''},"${h.finalUrl ?? h.error ?? ''}","${note}"`,
    )
  }

  writeFileSync(
    join(root, 'seo-deliverables', 'crawl_inventory.csv'),
    crawlLines.join('\n'),
    'utf8',
  )

  const audit = {
    generatedAt: new Date().toISOString(),
    wave: 'A',
    summary: [
      'Compared sitemap URLs via HTTP HEAD on production.',
      'Deep routes returning 404 on static hosting break SEO and Lighthouse for those URLs until SPA fallback (history fallback) is configured.',
      'Homepage Lighthouse lab metrics captured from production and/or local preview — see core_web_vitals_baseline.json.',
    ],
    hostingSpaRewrite:
      'Ensure nginx / Cloudflare / static host rewrites unknown paths to /index.html so /about and /blog return 200 with the app.',
    deepLinkHeadResults: heads,
  }

  writeFileSync(
    join(root, 'seo-deliverables', 'audit_report.json'),
    JSON.stringify(audit, null, 2),
    'utf8',
  )

  console.log('Wave A artifacts written to seo-deliverables/')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})