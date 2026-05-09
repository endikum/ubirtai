# Analytics & Search Console setup — UBIRT.AI (`www.ubirtai.site`)

This document matches **SEO_GEO_Master_Prompt.md Section 8** (Analytics & Tracking) and records what is already wired versus what you still confirm in Google’s UIs.

## Google Analytics 4 (GA4)

**Current implementation**

- Measurement ID **`G-T7WERHM15M`** is loaded globally via **gtag.js** in `index.html` (Google Tag snippet).
- Events used elsewhere in the app should appear under **Configure → Events** once traffic exists.

**Recommended follow-ups**

1. In [Google Analytics](https://analytics.google.com/), confirm this property/stream points at **`https://www.ubirtai.site`** (and `http://www` / apex redirects if you use them).
2. Under **Admin → Data streams → Web**, enable **Enhanced measurement** if you want automatic outbound clicks, scrolls, etc., aligned with your privacy policy.
3. Mark key conversions as **Key events** (e.g. outbound clicks to Play Store, form submits if you track them).
4. Link GA4 to Search Console (below) under **Admin → Product links**.

## Google Search Console (GSC)

**Owner tasks (not stored in code)**

1. Add a **Domain** or **URL-prefix** property for `https://www.ubirtai.site/` (pick **one** canonical strategy and stick to it).
2. Complete **verification** (DNS TXT for domain property, or HTML file / meta tag for URL-prefix).
3. Submit **`https://www.ubirtai.site/sitemap.xml`** under **Sitemaps**.
4. After deploys that change URLs or content, use **URL Inspection** on critical pages once SPA routing returns **200** for deep links (see `audit_report.json` — deep routes currently **404** on production until the host serves `index.html` for client routes).

## Ads

- **Google AdSense** client `ca-pub-8032670705959771` is present in `index.html`. Ensure the site is approved and ad placement complies with policy.

## Bing Webmaster Tools

- Optional but recommended: import from GSC or verify separately and submit the same sitemap.

---

**Last updated:** Wave A — generated with the repository deliverables.
