# KPI dashboard — UBIRT.AI

Aligned with **SEO_GEO_Master_Prompt.md Section 8.3**. Baselines are **to be filled** after two to four weeks of stable indexing and traffic; lab metrics for Core Web Vitals are seeded from `core_web_vitals_baseline.json`.

| KPI | Baseline | Target | Data source | Review cadence |
|-----|----------|--------|-------------|----------------|
| Organic sessions | *TBD* | +30% in 90 days | GA4 | Weekly |
| Organic keywords (top 10) | *TBD* | 2× in 6 months | GSC / Ahrefs | Monthly |
| Average position | *TBD* | &lt; 15 overall | GSC | Monthly |
| CTR | *TBD* | &gt; 3% | GSC | Monthly |
| LCP | See `core_web_vitals_baseline.json` (lab) / *field TBD* | ≤ 2.5 s | GSC CWV / PSI | Weekly |
| INP | *field TBD* | ≤ 200 ms | GSC CWV / PSI | Weekly |
| CLS | See baseline | &lt; 0.1 | GSC CWV / PSI | Weekly |
| Domain Authority | *TBD* | +5 in 6 months | Ahrefs/Moz | Monthly |
| Referring domains | *TBD* | +10/month | Ahrefs | Monthly |
| AI citations (brand in AI answers) | *manual* | Improve month over month | Spot checks / tools | Monthly |
| Conversion rate (e.g. Play Store outbound) | *TBD* | Site-specific | GA4 | Weekly |

## Notes

- **INP** is a **field** metric; Lighthouse **TBT** / **max-potential-FID** in `core_web_vitals_baseline.json` are **lab proxies** only.
- Until production returns **HTTP 200** for React Router paths (`/about`, `/blog`, etc.), GSC metrics for those URLs will not behave like a normal multi-page site—fix hosting **SPA fallback** first (see `audit_report.json`).
