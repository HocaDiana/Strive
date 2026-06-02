Lighthouse Audit Report

## Scores

| Category | Score | Status |
| :--- | :---: | :--- |
| Performance | 100 / 100 | Pass |
| Accessibility | 100 / 100 | Pass |
| Best Practices | 100 / 100 | Pass |
| SEO | 90 / 100 | Needs Improvement |

---

## Key Metrics

- **First Contentful Paint (FCP):** 0.2 s
- **Largest Contentful Paint (LCP):** 0.2 s
- **Speed Index:** 0.3 s
- **Total Blocking Time (TBT):** 0 ms
- **Cumulative Layout Shift (CLS):** 0

---

## Action Items

### SEO
- **Missing Meta Description:** Add a `<meta name="description" content="...">` element to the document head to allow search engines to summarize page content.

### Performance & File Optimization
- **Render-Blocking Requests:** Defer or inline assets to move critical network requests (`portfolio.js`, `portfolio.css`, and `styles.css`) out of the initial page render path (Estimated savings: 70 ms).
- **Minify CSS:** Compress `styles.css` to lower the network payload size (Estimated savings: 3 KiB).
- **Text Compression:** Enable compression on the primary server response to decrease document request latency (Estimated savings: 7 KiB).

### Diagnostics
- **Back/Forward Cache (bfcache):** The page currently prevents bfcache restoration because it utilizes WebSockets.
