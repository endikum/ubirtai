import { Helmet } from 'react-helmet-async'
import {
  SITE_ORIGIN,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from '../seo/site'
import { getRouteMeta } from '../seo/routeMeta'
import {
  HOME_FAQ_MAIN_ENTITY,
  isHomeRoute,
} from '../seo/homeFaqSchema'

function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

const BREADCRUMBS = {
  '/about': [
    { name: 'Home', url: `${SITE_ORIGIN}/` },
    { name: 'About', url: `${SITE_ORIGIN}/about` },
  ],
  '/blog': [
    { name: 'Home', url: `${SITE_ORIGIN}/` },
    { name: 'Blog', url: `${SITE_ORIGIN}/blog` },
  ],
  '/contact': [
    { name: 'Home', url: `${SITE_ORIGIN}/` },
    { name: 'Contact', url: `${SITE_ORIGIN}/contact` },
  ],
  '/privacy-policy': [
    { name: 'Home', url: `${SITE_ORIGIN}/` },
    { name: 'Privacy Policy', url: `${SITE_ORIGIN}/privacy-policy` },
  ],
  '/terms-of-service': [
    { name: 'Home', url: `${SITE_ORIGIN}/` },
    { name: 'Terms of Service', url: `${SITE_ORIGIN}/terms-of-service` },
  ],
}

export default function PageSeo({ pathname }) {
  const canonicalPath = pathname.endsWith('/') && pathname !== '/'
    ? pathname.slice(0, -1)
    : pathname
  const canonicalUrl = `${SITE_ORIGIN}${canonicalPath === '' ? '/' : canonicalPath}`
  const { title, description } = getRouteMeta(
    canonicalPath === '' ? '/' : canonicalPath,
  )

  const faqLd =
    isHomeRoute(canonicalPath === '' ? '/' : canonicalPath) &&
    ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ_MAIN_ENTITY,
    })

  const crumbs = BREADCRUMBS[canonicalPath]
  const breadcrumbLd = crumbs ? breadcrumbJsonLd(crumbs) : null

  const extraScripts = []
  if (faqLd) extraScripts.push(faqLd)
  if (breadcrumbLd) extraScripts.push(breadcrumbLd)

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {extraScripts.map((json, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(json)}
        </script>
      ))}
    </Helmet>
  )
}
