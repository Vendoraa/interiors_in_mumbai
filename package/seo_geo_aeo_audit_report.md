# SEO, GEO, and AEO Audit Report
**Website**: Shrishti Interiors (Interiors in Mumbai)
**Date**: July 14, 2026

This comprehensive audit evaluates the website's performance across standard Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO) to ensure maximum visibility, readability, and citation rates by modern AI assistants like ChatGPT, Gemini, Claude, Perplexity, and Google AI Overviews.

---

## Executive Summary

While the website features a modern design and incorporates basic SEO techniques (such as React Helmet integration and dynamic canonical tags), several critical gaps prevent it from achieving top performance on search engines and AI engines. 

Specifically, **client-side React rendering** without static pre-rendering limits crawlability, **broken internal linking** prevents users and bots from finding index pages, and **incorrect heading structures** impact search semantic understanding.

---

## 1. Audit Findings by Category

### 🔍 Standard SEO Audits

#### ❌ Missing Title Tags & Meta Descriptions
* **Issue**: The `<SEO />` metadata component is missing from several primary and dynamic pages, including:
  * Blog Detail pages ([BlogDetail.js](file:///e:/shrishti_interiors/package/src/pages/BlogDetail.js), [BlogDetails.js](file:///e:/shrishti_interiors/package/src/pages/BlogDetails.js))
  * Service Detail page ([ServicesDetail.js](file:///e:/shrishti_interiors/package/src/pages/ServicesDetail.js))
  * Portfolio Detail page ([PortfolioDetail.js](file:///e:/shrishti_interiors/package/src/pages/PortfolioDetail.js))
  * General pages ([Team.js](file:///e:/shrishti_interiors/package/src/pages/Team.js), [PrivacyPolicy.js](file:///e:/shrishti_interiors/package/src/pages/PrivacyPolicy.js))
* **Impact**: These pages default to the static metadata in [index.html](file:///e:/shrishti_interiors/package/public/index.html). Search engines see duplicate titles and descriptions, leading to poor rankings and suboptimal search snippets.

#### ⚠️ Canonical URL Discrepancies
* **Issue 1**: The website uses direct DOM manipulation in [CanonicalUrl.jsx](file:///e:/shrishti_interiors/package/src/components/CanonicalUrl.jsx) instead of managing it within the standard React Helmet pipeline. This can cause issues with pre-renderers or search bots.
* **Issue 2**: The canonical tags point to `https://www.interiorsinmumbai.com/...` (with `www.`), but the `robots.txt` lists the sitemap as `https://interiorsinmumbai.com/sitemap.xml` (without `www.`). This is a canonicalization mismatch.

#### ❌ H1-H6 Heading Hierarchy
* **Issue 1**: The homepage ([Home.js](file:///e:/shrishti_interiors/package/src/pages/Home.js)) has a non-semantic `<h1>LET'S MAKE</h1>` tag. It lacks core keywords (e.g., "Interior Designers in Mumbai").
* **Issue 2**: Sub-pages use [CommanBanner.jsx](file:///e:/shrishti_interiors/package/src/elements/CommanBanner.jsx), which renders the page's main title in an `<h2>` tag instead of an `<h1>`. As a result, pages like Mira Road, Thane, Services, and Portfolio have **no `<h1>` tag at all**, breaking the semantic hierarchy.

#### ❌ Broken Internal Navigation Linking
* **Issue**: In [Menu.jsx](file:///e:/shrishti_interiors/package/src/components/Menu.jsx), the navbar links for "Services" and "Blog" point directly to `/services-details` and `/blog-details`.
* **Impact**: The rich, SEO-optimized overview pages `/services` ([Services.js](file:///e:/shrishti_interiors/package/src/pages/Services.js)) and `/blog` ([BlogList.js](file:///e:/shrishti_interiors/package/src/components/BlogList.js)) are bypassed. Crawlers and users can only find them if they exist in the sitemap, leading to orphan-like page structures.

#### ⚠️ XML Sitemap & Robots.txt Conflicts
* **Issue 1**: There is a dummy [sitemap.xml](file:///e:/shrishti_interiors/sitemap.xml) in the root workspace pointing to `example.com` which needs to be removed.
* **Issue 2**: In [robots.txt](file:///e:/shrishti_interiors/package/public/robots.txt), the Sitemap URL points to the non-www domain, causing crawler redirects.

---

### 🤖 GEO & AEO (Generative & Answer Engine Optimization)

AI search engines (Perplexity, Gemini, ChatGPT Search) rely on high-fidelity, crawlable, structured content to answer user questions and cite sources.

#### 🚨 Critical Crawlability & JS Dependency (Client-Side Rendering)
* **Issue**: The site is a standard React SPA. Search engine crawlers and LLM parser bots that do not execute JavaScript will only see the fallback `#seo-fallback` div inside `index.html`. 
* **Impact**: This fallback div contains outdated, brief descriptions from years ago. AI engines **cannot index the actual blog content, localized location copy, pricing details, or dynamic services**.
* **Recommendation**: While `react-snap` is in `devDependencies`, it is not configured in `package.json` scripts. You need to enable pre-rendering (SSG) so that crawlers receive pre-rendered HTML.

#### ❌ Schema.org Structured Data Gaps
* **Issue**: While the site has basic `LocalBusiness` and `HowTo` schema, it lacks:
  * `BlogPosting` or `Article` schema on blog pages to structure author, publish date, and body content for LLMs.
  * `Service` schema detailing specific services and pricing on services pages.
  * `BreadcrumbList` schema on pages that do not render the `<SEO />` component.
* **Impact**: AI engines cannot parse details programmatically, reducing the chance of showing up in AI rich snippets or card answers.

#### ❌ Lacks AI Agent Directives
* **Issue**: The `robots.txt` does not contain explicit rules to prioritize/manage AI agents (like `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`).
* **Impact**: Standard crawl limits may prevent these bots from reading deep blog articles.

---

### ⚡ Performance, Core Web Vitals & Accessibility

#### ⚠️ Image Optimization
* **Issue**: The site loads heavy `.png` and `.jpg` files (e.g., banner images, slider images) instead of compressed modern formats like `.webp` or `.avif`.
* **Impact**: High Largest Contentful Paint (LCP) time and increased page size.

#### ⚠️ Accessibility (Alt Tags)
* **Issue**: Several decorative and content images lack descriptive `alt` tags (e.g., `alt=""` or missing `alt` entirely on portfolio detail pages).
* **Impact**: Negative accessibility rating and missed image-search traffic.

---

## 2. Prioritized List of Fixes

### 🔴 High Priority (Immediate Impact on Indexing & Crawling)

| Fix ID | Component/File | Description | Fix |
| :--- | :--- | :--- | :--- |
| **H-1** | [package.json](file:///e:/shrishti_interiors/package/package.json) | Enable static pre-rendering | Configure `react-snap` in `package.json` build scripts so that bots get fully rendered HTML rather than an empty React root. |
| **H-2** | [Menu.jsx](file:///e:/shrishti_interiors/package/src/components/Menu.jsx) | Correct primary navigation links | Link "Services" to `/services` and "Blog" to `/blog` (or `/blog-grid`) instead of directing traffic to dynamic detail pages. |
| **H-3** | [CommanBanner.jsx](file:///e:/shrishti_interiors/package/src/elements/CommanBanner.jsx) | Fix missing `<h1>` hierarchy | Change the page header title wrapper from `<h2>` to `<h1>`. |
| **H-4** | [Home.js](file:///e:/shrishti_interiors/package/src/pages/Home.js) | Fix homepage `<h1>` keyword | Change `<h1>LET'S MAKE</h1>` to a descriptive, keyword-rich header like `<h1>Premier Interior Designers & Renovators in Mumbai</h1>` (style it visually matching the design using CSS classes). |
| **H-5** | Multiple Pages | Add missing `<SEO />` component | Import and render `<SEO />` on: [BlogDetail.js](file:///e:/shrishti_interiors/package/src/pages/BlogDetail.js), [BlogDetails.js](file:///e:/shrishti_interiors/package/src/pages/BlogDetails.js), [ServicesDetail.js](file:///e:/shrishti_interiors/package/src/pages/ServicesDetail.js), [PortfolioDetail.js](file:///e:/shrishti_interiors/package/src/pages/PortfolioDetail.js), [Team.js](file:///e:/shrishti_interiors/package/src/pages/Team.js), and [PrivacyPolicy.js](file:///e:/shrishti_interiors/package/src/pages/PrivacyPolicy.js). |

### 🟡 Medium Priority (Structure & Compatibility)

| Fix ID | Component/File | Description | Fix |
| :--- | :--- | :--- | :--- |
| **M-1** | [SEO.jsx](file:///e:/shrishti_interiors/package/src/components/SEO.jsx) | Clean up Canonical URLs | Remove dynamic DOM script in `CanonicalUrl.jsx` and handle `<link rel="canonical" href={canonicalUrl} />` directly inside Helmet inside `SEO.jsx`. |
| **M-2** | [robots.txt](file:///e:/shrishti_interiors/package/public/robots.txt) | Standardize domains & AI bot allowances | Update Sitemap url to `https://www.interiorsinmumbai.com/sitemap.xml`. Add rules allowing/optimizing crawl rates for `GPTBot`, `ClaudeBot`, and `PerplexityBot`. |
| **M-3** | root / public | Clean up sitemaps | Remove the unused, dummy [sitemap.xml](file:///e:/shrishti_interiors/sitemap.xml) in the root workspace to avoid developer confusion. |
| **M-4** | [BlogDetails.js](file:///e:/shrishti_interiors/package/src/pages/BlogDetails.js) | Add BlogPosting Schema | Dynamically generate `BlogPosting` or `Article` structured JSON-LD data using the content loaded from Contentful, rendering it in a `<Helmet>` block. |
| **M-5** | [ServicesDetail.js](file:///e:/shrishti_interiors/package/src/pages/ServicesDetail.js) | Add Service Schema | Add dynamic `Service` structured data when rendering specific services (e.g., painting, electrical, custom furniture). |

### 🟢 Low Priority (Performance & Polish)

| Fix ID | Component/File | Description | Fix |
| :--- | :--- | :--- | :--- |
| **L-1** | Assets & Images | Optimize image formats | Convert large PNG/JPG slider and background images to `.webp` or `.avif` formats. |
| **L-2** | Portfolio / Pages | Add image `alt` attributes | Inspect all images and verify they have descriptive, context-rich `alt` tags rather than empty placeholders. |

---

## 3. How to Verify Fixes

1. **Rich Results Test**: Once schemas are added, run the URLs through the [Google Rich Results Test](https://search.google.com/test/rich-results) to verify JSON-LD syntax.
2. **Lighthouse / Web Vitals**: Run audit profiles in Chrome DevTools to verify Mobile Friendliness, Accessibility, and Page Speed.
3. **AI Crawler Emulation**: Use custom User-Agent strings (e.g., `Mozilla/5.0 (compatible; GPTBot/1.2; +https://openai.com/gptbot)`) with curl/fetch to verify that pre-rendered static content matches the JavaScript-rendered output.
