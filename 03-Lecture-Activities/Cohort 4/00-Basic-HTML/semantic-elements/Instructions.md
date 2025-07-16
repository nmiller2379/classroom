# User Stories for Refactor Activity

## Title: Refactoring the Non-Semantic City Code

### User Story 1: As a student learning HTML, I want to refactor a webpage with non-semantic HTML into a semantic structure so that the webpage is more accessible and easier to maintain.

#### Acceptance Criteria:

- Replace generic `<div>` and `<span>` elements with the appropriate semantic HTML5 elements such as `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, and `<nav>` where appropriate.
- Ensure each semantic element is used in the correct context (e.g., `<header>` for introductory content, `<article>` for self-contained content, `<footer>` for footer information).
- Maintain the visual structure and content of the original webpage.

### User Story 2: As a student practicing accessibility principles, I want to update the non-semantic webpage to include basic accessibility features so that it is more inclusive for all users.

#### Acceptance Criteria:

- Ensure that all anchor tags (`<a>`) have meaningful and descriptive link text (e.g., avoid “click here”).
- Use the `<nav>` element where appropriate.
- Verify that the structure of the page follows a logical order for headings and content.
- Use `<time>` for dates where appropriate.

### Additional Notes:

- The completed refactored webpage should retain the visual appearance of the original non-semantic version, but the underlying code must now follow semantic best practices.

### Deliverables:

- Refactored HTML file.
- Be sure to include comments in the code explaining the semantic elements and their purpose.
