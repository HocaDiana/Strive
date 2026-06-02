<<<<<<< HEAD
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
=======
# Strive Dashboard - Homework 2

This project is an extension of the Strive Dashboard (HW1).

## Project Scenario
Strive is a personal productivity dashboard designed for students to track study sessions and implement scientifically-backed study methods.

## New Features (HW2)
- **CSS Specificity Exercise**: Added `specificity.html` and `specificity.txt` to demonstrate understanding of CSS selector weight.
- **Business Card Page**: A dedicated `card.html` page using element, class, and ID selectors.
- **Responsive Overview**: An `overview.html` page using **CSS Grid** for the main layout and **Flexbox** for components, including media queries for mobile responsiveness.
- **Figma Integration**: Implemented a login/authentication UI based on Figma designs, with styles exported to `strive_auth.css`.
- **Chatbot Interactivity**: A functional "Study Methods Quiz" in `chatbot.html` using vanilla JavaScript for DOM manipulation and event handling.

## Technical Implementation
- **CSS Placement**: Demonstrates External (main CSS), Internal (`methods.html` style block), and Inline (timer progress bar) styling.
- **Layouts**: Used CSS Grid for the dashboard and overview structures; Flexbox for navigation and cards.
- **Validation**: All HTML and CSS files have been updated to satisfy HW1 and HW2 requirements.

## File Checklist
- `index.html`, `methods.html`, `log.html`, `support.html` (Core Pages)
- `specificity.html` & `specificity.txt` (Lab Exercise)
- `card.html` & `card.css` (Business Card)
- `overview.html` & `overview.css` (Responsive Profile)
- `chatbot.html`, `chatbot.css`, `chatbot.js` (JS Interactivity)
- `strive_auth.css` (Figma Exported Styles)

## Known Limitations
- The timer on the main dashboard remains a visual placeholder.
- Checkbox states on the Log page do not persist after a page refresh.
>>>>>>> refs/remotes/origin/main
