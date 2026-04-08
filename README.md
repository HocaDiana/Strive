## Chosen Scenario
**Study Sprint Planner:** A web-based dashboard designed to help students track their focus sessions, manage sub-tasks, explore study methods, and log their productivity using a structured, interval-based approach.

## Implemented Requirements Checklist
- [x] **Minimum 4 Pages:** Includes `index.html` (Dashboard), `methods.html` (Methods Guide), `log.html` (Session Log), and `support.html` (Support/FAQ).
- [x] **Semantic HTML:** All pages use a valid HTML5 shell and proper structural landmarks (`<header>`, `<nav>`, `<main id="main-content">`, `<footer>`).
- [x] **Accessibility:** Included a visually hidden "Skip to main content" link that appears on keyboard focus.
- [x] **Accessible Forms:** The Support page features a form grouped with `<fieldset>` and `<legend>`, and uses explicit `<label>` tags tied to input IDs.
- [x] **Tabular Data:** The Log page uses a real HTML `<table>` with a `<caption>` and proper `<th scope="col">` headers.
- [x] **Modern CSS Layout:** Created a cohesive design using a single external stylesheet (`styles.css`), utilizing CSS Grid for the layout instead of HTML tables.
- [x] **Working Navigation:** Bi-directional navigation links are consistent and functional across all pages.
- [x] **Validation:** HTML and CSS code checked for errors.

## Known Limitations
* **Static Interactivity:** Since JavaScript is outside the scope of this assignment, the Timer buttons (Start/Pause/Complete) are visual placeholders and do not count down.
* **State Persistence:** Checkbox states and form submissions do not save or persist upon page reload.
* **Responsiveness:** The CSS Grid layout is primarily optimized for desktop viewing. A dedicated mobile toggle menu for small screens has not been implemented yet.
