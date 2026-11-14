# SEO, GEO, and AEO Audit Report
**Website**: Shrishti Interiors (Interiors in Mumbai)
**Date**: July 14, 2026 — **Status Update**: September 17, 2026 (all fixes implemented & verified)

This comprehensive audit evaluates the website's performance across standard Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) to ensure maximum visibility, readability, and citation rates by modern AI assistants like ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews.

> **RESOLUTION SUMMARY (Sept 17, 2026)**: All High/Medium/Low priority fixes have been implemented. The site is fully pre-rendered (26 pages, including 10 Contentful blog posts), schemas are clean and non-duplicated, and the deployed `build/` folder has been regenerated and verified.

---

## 1. Audit Findings by Category

### 🔍 Standard SEO Audits

#### ✅ Missing Title Tags & Meta Descriptions — FIXED
* **Issue (original)**: The `<SEO />` metadata component was missing from several primary and dynamic pages, including Blog Detail pages, Service Detail, Portfolio Detail, Team, and Privacy Policy.
* **Resolution**: `<SEO />` is now rendered on every page, including BlogDetail.js, BlogDetails.js, ServicesDetail.js, PortfolioDetail.js, Team.js, and PrivacyPolicy.js. The `/blog` index route now renders BlogGrid.js (SEO + h1 + ItemList schema). Each pre-rendered page carries a unique `<title>`, description, keywords, and canonical tag (verified across all 26 pre-rendered pages).

#### ✅ Canonical URL Discrepancies — FIXED
* **Issue (original)**: Direct DOM manipulation in CanonicalUrl.jsx instead of the React Helmet pipeline; `www.` vs non-`www.` mismatch between canonical tags and robots.txt sitemap.
* **Resolution**: CanonicalUrl.jsx was removed; the canonical link is managed inside the Helmet block in SEO.jsx. robots.txt now declares `https://www.interiorsinmumbai.com/sitemap.xml` (www, matching canonicals). Static duplicate OG/Twitter/description tags were also removed from `index.html` so Helmet's per-page tags are the single source (no more duplicate metadata on pre-rendered pages), and per-page `og:url` was added.

#### ✅ H1-H6 Heading Hierarchy — FIXED
* **Issue (original)**: Homepage had a non-semantic `<h1>LET'S MAKE</h1>`; CommanBanner rendered page titles in `<h2>`, leaving sub-pages with no `<h1>`.
* **Resolution**: CommanBanner renders the page title in `<h1>`. The homepage has a keyword-rich `<h1>` ("Premier Interior Designers & Turnkey Contractors in Mumbai"). Verified: every pre-rendered page contains exactly one `<h1>`.

#### ✅ Broken Internal Navigation Linking — FIXED
* **Issue (original)**: Navbar "Services" and "Blog" pointed to `/services-details` and `/blog-details`, orphaning the rich overview pages.
* **Resolution**: Menu.jsx links "Services" → `/services` and "Blog" → `/blog`. `/blog-grid` now 301-redirects to `/blog` (duplicate content prevention). `/blog` renders the SEO-optimized BlogGrid (previously it rendered a bare list with no h1/SEO).

#### ✅ XML Sitemap & Robots.txt Conflicts — FIXED
* **Issue (original)**: Dummy sitemap.xml in root pointing to example.com; robots.txt sitemap pointed to non-www domain.
* **Resolution**: Root dummy sitemap removed. robots.txt sitemap uses the canonical `https://www.interiorsinmumbai.com/sitemap.xml`. The sitemap is now auto-generated **after** the react-snap crawl and includes all 15 static routes **plus all 10 pre-rendered blog posts (25 URLs total)**.

---

### 🤖 GEO & AEO (Generative & Answer Engine Optimization)

AI search engines (Perplexity, Gemini, ChatGPT Search) rely on high-fidelity, crawlable, structured content to answer user questions and cite sources.

#### ✅ Critical Crawlability & JS Dependency (Client-Side Rendering) — FIXED
* **Issue (original)**: React SPA with no pre-rendering; bots saw only the fallback `#seo-fallback` div with outdated copy.
* **Resolution**: `react-snap` pre-rendering is enabled in the build pipeline (`postbuild`). All 26 pages — including all 10 Contentful blog posts with their full article content — are now served as static HTML. Additional hardening applied:
  * Pre-render timeout raised to 60s and Contentful requests are allowed during the crawl (blog cards/posts now render in the static HTML).
  * Browserslist production target extended with `chrome 79` so bundle syntax parses in the pre-render browser.
  * GA, Meta Pixel, reCAPTCHA, and Google Maps scripts are deferred to first user interaction via a `useUserInteraction` hook (these previously crashed the pre-render browser — Chromium 77 — and silently aborted crawls, leaving 17+ routes unrendered).
  * The `#seo-fallback` copy was refreshed (experience claim corrected from "35 years" to "15+ years / 1,200+ projects", consistent with llm.txt and AboutPage schema).

#### ✅ Schema.org Structured Data Gaps — FIXED
* **Issue (original)**: Missing `BlogPosting`/`Article` schema on blog pages, `Service` schema on services pages, `BreadcrumbList` on pages without `<SEO />`.
* **Resolution**:
  * `BlogPosting` JSON-LD on BlogDetails (dynamic, from Contentful), plus `ItemList` + `Article` schema on the blog index.
  * `Service` schema (`buildService`) on ServicesDetail.js and the Services page.
  * `BreadcrumbList` rendered by the `<SEO />` component on every page.
  * Global schema cleanup in `public/index.html`: fake `aggregateRating` + review array removed (Google self-serving review policy violation), duplicate conflicting LocalBusiness entities merged into one canonical `@graph` with `knowsAbout`, `hasOfferCatalog`, and `slogan` preserved.

#### ✅ Lacks AI Agent Directives — FIXED
* **Issue (original)**: robots.txt had no rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
* **Resolution**: robots.txt explicitly allows GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, and Google-Extended. `llm.txt` provides an AI-consumable site summary. FAQ answers use native `<details>/<summary>` (crawlable without JS) with FAQPage schema.

---

### ⚡ Performance, Core Web Vitals & Accessibility

#### ✅ Image Optimization — FIXED
* **Issue (original)**: Heavy PNG/JPG banner and slider images.
* **Resolution**: Slider, about, and portfolio assets converted to `.webp`. The LCP preload in `index.html` now points to the existing `pic1.webp` (previously it referenced the deleted `pic1.png`). Third-party scripts (GA, Pixel, reCAPTCHA, Maps) defer until user interaction, reducing initial page weight.

#### ✅ Accessibility (Alt Tags) — FIXED
* **Issue (original)**: Content images lacked descriptive `alt` attributes (especially Portfolio Detail).
* **Resolution**: Portfolio Detail and other content images carry descriptive, contextual `alt` text. No empty `alt=""` content images remain in `src/`. Social icon links have `aria-label`s.

---

## 2. Prioritized List of Fixes — ALL COMPLETED

### 🔴 High Priority (Immediate Impact on Indexing & Crawling)

| Fix ID | Component/File | Description | Status |
| :--- | :--- | :--- | :--- |
| **H-1** | package.json | Enable static pre-rendering (react-snap) | ✅ Done — 26 pages pre-rendered, including 10 blog posts |
| **H-2** | Menu.jsx | Correct primary navigation links | ✅ Done — Services → /services, Blog → /blog |
| **H-3** | CommanBanner.jsx | Fix missing `<h1>` hierarchy | ✅ Done — page titles render as `<h1>` |
| **H-4** | Home.js | Fix homepage `<h1>` keyword | ✅ Done — keyword-rich, visually hidden h1 |
| **H-5** | Multiple Pages | Add missing `<SEO />` component | ✅ Done — SEO on all 6 listed pages + blog index |

### 🟡 Medium Priority (Structure & Compatibility)

| Fix ID | Component/File | Description | Status |
| :--- | :--- | :--- | :--- |
| **M-1** | SEO.jsx | Clean up canonical URLs (Helmet-managed) | ✅ Done — CanonicalUrl.jsx removed; canonical in Helmet; static duplicate OG/meta removed; og:url added |
| **M-2** | robots.txt | Standardize domains & AI bot allowances | ✅ Done — www sitemap + GPTBot/ClaudeBot/PerplexityBot/Google-Extended/ChatGPT-User allowed |
| **M-3** | root / public | Remove dummy sitemap.xml | ✅ Done — removed |
| **M-4** | BlogDetails.js | Add BlogPosting schema | ✅ Done — dynamic JSON-LD from Contentful (+ ItemList/Article on blog index) |
| **M-5** | ServicesDetail.js | Add Service schema | ✅ Done — buildService JSON-LD wired via JsonLd |

### 🟢 Low Priority (Performance & Polish)

| Fix ID | Component/File | Description | Status |
| :--- | :--- | :--- | :--- |
| **L-1** | Assets & Images | Optimize image formats | ✅ Done — WebP assets in use; preload fixed to pic1.webp |
| **L-2** | Portfolio / Pages | Add image `alt` attributes | ✅ Done — descriptive alts verified; no empty alts in src |

### ➕ Additional Fixes Applied Beyond the Original Audit

| Fix | File(s) | Status |
| :--- | :--- | :--- |
| Remove fake reviews/aggregateRating from shipped schema (Google policy risk) | public/index.html | ✅ Done |
| Remove all unverifiable award claims ("Mumbai Interior Design Award 2023", "Best Turnkey Execution 2022", "Customer Choice Award 2021") from schema, site sections, and llm.txt | public/index.html, eeat.js, EeatSignals.jsx | ✅ Done |
| Remove fabricated designer/team-member profiles and Person schema; /team now redirects to /about-us; "45+ Designers & craftsmen" stat removed; blog author switched from fake Person to Organization | Team.js (deleted), eeat.js, schema.js, App.js, AboutUs.js, BlogDetails.js, BlogGrid.js, llm.txt | ✅ Done |
| Fix `sameAs` pointing to theme author's socials (dexignzone) in shipped schema | public/index.html | ✅ Done |
| Merge duplicate, conflicting LocalBusiness JSON-LD entities (priceRange/awards mismatch) | public/index.html | ✅ Done |
| Fix schema images referencing nonexistent `logo.png` / `og-image.png` / theme demo URL | 5 location pages, BlogDetails.js, SEO.jsx | ✅ Done — all point to logo512.png |
| Route `/blog` to the SEO-optimized BlogGrid; 301 `/blog-grid` → `/blog` | App.js, BlogGrid.js | ✅ Done |
| Defer GA / Meta Pixel / reCAPTCHA / Google Maps to first user interaction (fixes crawl aborts, improves LCP) | useUserInteraction.js, GoogleAnalytics.jsx, MetaPixel.jsx, ContactUs.js | ✅ Done |
| Auto-add pre-rendered blog posts to sitemap (25 URLs) | scripts/generate-sitemap.js | ✅ Done |
| Style native `<details>` FAQ accordion to match design | _accordion.scss, style.css | ✅ Done |
| Refresh outdated `#seo-fallback` copy (35 yrs → 15+ yrs, 1,200+ projects) | public/index.html | ✅ Done |

---

## 3. How to Verify Fixes

1. **Rich Results Test**: Once schemas are added, run the URLs through the [Google Rich Results Test](https://search.google.com/test/rich-results) to verify JSON-LD syntax. *(All local JSON-LD blocks validated as parseable JSON; live test pending deploy.)*
2. **Lighthouse / Web Vitals**: Run audit profiles in Chrome DevTools to verify Mobile Friendliness, Accessibility, and Page Speed.
3. **AI Crawler Emulation**: Use custom User-Agent strings (e.g., `Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)`) with curl/fetch to verify that pre-rendered static content matches the JavaScript-rendered output.

### Post-Fix Verification (Sept 17, 2026)
* ✅ 26 pre-rendered HTML pages in `build/` — every page has exactly one `<h1>`, unique `<title>`, canonical, and single set of OG/Twitter tags.
* ✅ No "Loading…" placeholders in any pre-rendered page (blog cards and blog articles render full Contentful content).
* ✅ Sitemap: 25 URLs (15 static + 10 blog posts), `www` domain, auto-generated post-crawl.
* ✅ Zero occurrences in build of: `dexignzone`, fake review names, `aggregateRating`, dead `pic1.png`, theme demo URLs.
* ✅ Contact page pre-renders with a static map placeholder + "Open in Google Maps" link (no Google scripts load for bots).
* ✅ Build pipeline: `react-scripts build` → `react-snap` (60s timeout) → `generate-sitemap.js`.
