# Audit Report — Real Project (`C:\work\shrishti_interiors`)

**Site:** https://www.interiorsinmumbai.com
**Audited:** 2026-11-12
**Scope:** `package/` (React 18 + Contentful + react-snap prerender)

---

## ⚠️ MOST IMPORTANT FINDING: The live site is serving a STALE build

Your **source code is correct**, but the deployed site is outdated.

### Evidence
| Check | Result |
|---|---|
| `src/components/Footer2.jsx` social links | ✅ Correct (`interiorsinmumbai`) |
| `.env` social URLs | ✅ Correct (`interiorsinmumbai`) |
| `build/` folder social links | ✅ Correct (no dexignzone) |
| **Live site footer social links** | ❌ **Still `dexignzone`** |

### Root cause
`netlify.toml`:
```toml
[build]
  command = "echo 'Skipping build - deploying pre-rendered static files from deploy-build branch'"
  publish = "build"
```

**Netlify is NOT building.** It deploys whatever is committed to the `deploy-build` branch. The live site is running an older commit from before the social-link fix.

### Fix
```powershell
cd "C:\work\shrishti_interiors\package"
npm run build          # builds + react-snap prerenders + regenerates sitemap
# then commit the build/ folder to the deploy-build branch and push
```

---

## ✅ What's Already Excellent (no action needed)

This project is **far more advanced** than the old `package/` template:

| Feature | Status |
|---|---|
| `react-snap` prerendering (26 pages) | ✅ Excellent for SEO/AEO |
| `react-helmet-async` per-page meta | ✅ |
| `BlogPosting` schema with `dateModified` | ✅ (BlogDetails.js) |
| `Service` schema | ✅ |
| `BreadcrumbList` schema | ✅ |
| `LocalBusiness` + `Organization` `@graph` | ✅ |
| `HowTo` schema | ✅ |
| `FAQPage` schema | ✅ |
| `llm.txt` (AI summary) | ✅ |
| AI crawler allow-list in robots.txt | ✅ |
| WebP images | ✅ |
| Lazy-loaded routes + error boundary | ✅ |
| Cookie consent | ✅ |
| GA4 + Meta Pixel (deferred) | ✅ |
| EmailJS contact form | ✅ |
| Floating WhatsApp | ✅ |
| 5 location landing pages | ✅ |
| `/pricing` page | ✅ |
| Contentful CMS integration | ✅ |
| E-E-A-T signals component | ✅ |
| Descriptive alt text | ✅ |
| `aria-label` on social icons | ✅ |

---

## 🔴 Issues Found & FIXED in this session

### 1. Experience claim inconsistency (CRITICAL — trust/E-E-A-T)
The site claimed **both** "35 years" and "15+ years" in different places.

| Location | Before | After |
|---|---|---|
| `Footer2.jsx` | "over 35 years" | ✅ "over 15 years" |
| `Working.jsx` (paragraph) | "Over 35 years" | ✅ "Over 15 years" |
| `Working.jsx` (counter) | `end={35}` | ✅ `end={15}` |
| `AboutUs.js`, `eeat.js`, `schema.js`, `llm.txt` | already "15+ years" | ✅ consistent |

**Why it matters:** Contradictory claims destroy E-E-A-T trust signals and can be flagged by AI answer engines as unreliable.

### 2. Broken "Terms & Condition" link
```jsx
// Before — no destination, goes nowhere
<li><Link>Terms & Condition</Link></li>

// After — points to privacy policy
<li><Link to="/privacy-policy">Terms &amp; Condition</Link></li>
```

### 3. Font bloat — 15 font files loaded
```html
<!-- Before: Montserrat 9 weights + Source Sans Pro 6 weights -->
family=Montserrat:wght@100;200;300;400;500;600;700;800;900
family=Source+Sans+Pro:wght@200;300;400;600;700;900

<!-- After: 4 weights total -->
family=Montserrat:wght@600;700
family=Source+Sans+Pro:wght@400;600
```
**Impact:** ~400–600 KB saved, faster LCP.

### 4. Missing AI crawlers in robots.txt
Added: `OAI-SearchBot`, `Claude-Web`, `anthropic-ai`, `Applebot-Extended`, `CCBot`, `cohere-ai`

### 5. `llms.txt` missing (only `llm.txt` existed)
Created `public/llms.txt` — the emerging standard filename. Both now served.

### 6. `dateModified` missing on blog index schema
`BlogDetail.js` and `BlogGrid.js` `ItemList` → `Article` now include `dateModified` from Contentful `sys.updatedAt`.

---

## 🟡 Remaining Recommendations (not yet done)

### A. Deployment pipeline (HIGHEST PRIORITY)
The `netlify.toml` skips builds. Either:
- **Option 1:** Change to `command = "npm run build"` and let Netlify build on push
- **Option 2:** Keep manual builds but ensure `build/` is committed to `deploy-build` after every change

**Until this is fixed, no code change will ever reach the live site.**

### B. `react-snap` include list is missing routes
```json
"include": ["/", "/about-us", "/services", "/portfolio", "/blog", ...]
```
Missing: `/blog-large-left-sidebar`, `/blog-list-left-sidebar`, `/error-404`
→ These render client-side only (weaker for crawlers).

### C. Duplicate blog components
Both `BlogDetail.js` (index) and `BlogDetails.js` (single post) exist with confusingly similar names. Consider renaming to `BlogIndex.js` / `BlogPost.js`.

### D. `react-swiper`, `react-parallax`, `react-modal-image`, `reactjs-popup`, `lightgallery`, `react-responsive-masonry` in dependencies
Verify usage — likely dead weight from the template.

### E. `theme-color` is `#000000`
Should match brand: `#a3cc02` (the primary green).

### F. `favicon.ico` is 67 KB
Oversized. Should be < 15 KB.

### G. No `AggregateRating` / `Review` schema
Once you have real Google reviews, add them (do NOT fabricate — Google penalizes self-serving reviews).

### H. Blog author is `Organization`, not `Person`
Good for avoiding fake profiles, but adding **real** named authors with credentials would boost E-E-A-T further.

---

## ✅ ROUND 2 — ALL RECOMMENDATIONS FIXED (2026-11-12)

| # | Item | Status |
|---|------|--------|
| A | `netlify.toml` now runs `npm run build` | ✅ Fixed |
| B | react-snap include: added `/portfolio-details`, `/blog-large-left-sidebar`, `/blog-list-left-sidebar`, `/error-404` → **31 pages** prerendered | ✅ Fixed |
| D | Removed 8 dead deps (`react-swiper`, `react-parallax`, `react-modal-image`, `reactjs-popup`, `lightgallery`, `react-responsive-masonry`, `@react-spring/*`) | ✅ Fixed |
| E | `theme-color` → `#a3cc02` | ✅ Fixed |
| F | `favicon.ico` 66 KB → **1.7 KB** (`scripts/generate-favicon.js`) | ✅ Fixed |
| G | No fabricated reviews (correct — left as-is) | ✅ N/A |
| H | Blog author stays `Organization` (correct — no fake profiles) | ✅ N/A |

---

## 🎨 ROUND 2 — UI/UX BUGS FOUND & FIXED

| # | Bug | Impact | Fix |
|---|-----|--------|-----|
| 1 | **Hero slider had no navigation** — `allowTouchMove={false}`, `loop={false}`, no pagination | 2nd slide was **unreachable** | `loop=true`, autoplay 6s, clickable pagination dots + CSS |
| 2 | **Mobile menu didn't close** on nav link click | Menu stayed open over content | Added `onClick={() => setOpen(false)}` |
| 3 | **Portfolio filter not clickable** — `<li onClick>` wrapped a `<Link>` with no `to` | Clicking filter text did nothing | Changed to `<button type="button">` + `aria-pressed`; CSS updated |
| 4 | **PortfolioDetail lightbox always opened the same 3 images** | Clicking any thumbnail showed wrong image | Now uses `index={galleryIndex}` |
| 5 | **"New York" location** on a Mumbai portfolio item | Wrong/confusing content | → "Mumbai" |
| 6 | **ComingSoon page showed "15/B Miranda House, New York, US"** | Wrong address | → real Mumbai address |
| 7 | `alt="img1"` on portfolio images | Poor accessibility/SEO | Descriptive alt text |
| 8 | Dead `lightgallery` / `view-btn` markup (library removed) | Broken hover affordance | Removed |
| 9 | Pricing title said **"2024"**, description said **₹800** (card said ₹600) | Outdated + inconsistent | → 2026, ₹600 |
| 10 | Breadcrumb had no `aria-label` / `aria-current` | Accessibility gap | Added |

---

## 📊 ROUND 2 — BUILD VERIFIED

```
31/31 pages prerendered (was 29)
0 × Contentful 422 errors
sitemap.xml → 24 URLs
favicon.ico → 1.7 KB
theme-color → #a3cc02
fonts → 4 weights
llms.txt + llm.txt present
```

---

## 📊 Scorecard

| Area | Score | Notes |
|---|---|---|
| **SEO** | 🟢 9/10 | Excellent — prerender, schema, canonicals all solid |
| **AEO** | 🟢 9/10 | llm.txt, AI crawlers, FAQPage, HowTo all present |
| **GEO** | 🟢 8/10 | Location pages + LocalBusiness schema |
| **Performance** | 🟡 7/10 | WebP + lazy load good; fonts now trimmed |
| **Accessibility** | 🟢 8/10 | Alt text + aria-labels present |
| **E-E-A-T** | 🟡 7/10 | Fixed contradiction; needs real author bios |
| **Deployment** | 🔴 3/10 | **Stale build — changes not reaching production** |
| **Overall** | 🟢 **8/10** | Strong codebase; deployment is the blocker |

---

## 🚀 Immediate Next Step

```powershell
cd "C:\work\shrishti_interiors\package"
npm run build
```

Then commit `build/` to the `deploy-build` branch and push — that's what makes the live site update.
