# Technical Documentation Page
This project will give you more practice with HTML and CSS. It is complete when the acceptance criteria have been met and the user stories are fulfilled.

## User Stories

1. **As a user**, I want to create a Technical Documentation Page about my favorite subject.
2. I want the following criteria to be met:
- I can see a main element with a corresponding id="main-doc", which contains the page's main content (technical documentation).
- Within the #main-doc element, I can see several section elements, each with a class of main-section. - There should be a minimum of 5.
- The first element within each main-section should be a header element which contains text that describes the topic of that section.
- Each section element with the class of main-section should also have an id that corresponds with the text of each header contained within it. Any spaces should be replaced with underscores (e.g. The section that contains the header "Javascript and Java" should have a corresponding id="Javascript_and_Java").
- The main-section elements should contain at least 10 p elements total (not each).
- The main-section elements should contain at least 5 code elements total (not each).
- The main-section elements should contain at least 5 li items total (not each).
- I can see a nav element with a corresponding id="navbar".
- The navbar element should contain one header element which contains text that describes the topic of the technical documentation.
- Additionally, the navbar should contain link (a) elements with the class of nav-link. There should be one for every element with the class main-section.
- The header element in the navbar must come before any link (a) elements in the navbar.
- Each element with the class of nav-link should contain text that corresponds to the header text within each section(e.g. if you have a "Hello world" section/header, your navbar should have an element which contains the text "Hello world").
- When I click on a navbar element, the page should navigate to the corresponding section of the main-doc element (e.g. If I click on a nav-link element that contains the text "Hello world", the page navigates to a section element that has that id and contains the corresponding header).
- On regular sized devices (laptops, desktops), the element with id="navbar" should be shown on the left side of the screen and should always be visible to the user.
- My Technical Documentation page should use at least one media query.

### Acceptance criteria
- The page should fulfill all user stories.
- The project must include a `README.md` file at the root of your project directory. Ensure the `README.md` includes: Title, introduction, features, technologies, setup and installation, usage, contributing, credits and license sections.
- The code should be well-documented with comments explaining key sections.
- The project should be submitted on the `ready-to-grade` branch in GitLab. Once you have created a merge request for the `ready-to-grade` branch, your project is submitted.
- The project should have a good commit history with descriptive commit messages.
- The page should have a modern, professional design.
- The project is due at the end of the day on Thursday, Feb. 20 EOD.
