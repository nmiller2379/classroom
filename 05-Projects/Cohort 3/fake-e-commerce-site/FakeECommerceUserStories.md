
# User Stories for Fake E-Commerce Site Project
This project will give you more practice with using a third-party API. For this project,  you are required to use `https://fakestoreapi.com/`. You may also supplement that with `https://dummyjson.com/`. To complete the project, fulfill the user stories below:

### 1. General Site Structure
- **Header Display:**
  - As a user, I want to see a header at the top of every page with a dynamic message, so I know which section of the site I'm currently viewing.

- **Footer Display:**
  - As a user, I want to see a footer at the bottom of every page with relevant site information, so I have access to additional details or contact information.

### 2. Navigation
- **Navbar Navigation:**
  - As a user, I want to use the navigation bar to easily access different sections of the site (Home, Jewelry, Women's Apparel, Electronics), so I can browse through various product categories.

### 3. Homepage Functionality
- **Homepage Product Preview:**
  - As a user, I want to see a preview of products from different categories on the homepage, so I can quickly navigate to the products I'm interested in.

- **Category Links on Homepage:**
  - As a user, I want to click on a category preview on the homepage to view all products within that category, so I can explore more products.

### 4. Category Pages
- **Jewelry Page:**
  - As a user, I want to view a list of jewelry products when I visit the Jewelry page, so I can browse and select items to purchase.

- **Women's Clothing Page:**
  - As a user, I want to view a list of women's clothing products when I visit the Women's Clothing page, so I can browse and select items to purchase.

- **Electronics Page:**
  - As a user, I want to view a list of electronic products when I visit the Electronics page, so I can browse and select items to purchase.

- **Loading State on Category Pages:**
  - As a user, I want to see a loading indicator while the products are being fetched, so I know the data is being loaded and displayed correctly.

- **Product Details Navigation:**
  - As a user, I want to click on a product in any category to view more details about it, so I can make an informed decision before purchasing.

### 5. Product Detail Pages
- **Jewelry Product Detail:**
  - As a user, I want to view detailed information about a specific jewelry product, including price, category, and description, so I can decide whether to buy it.

- **Electronics Product Detail:**
  - As a user, I want to view detailed information about a specific electronic product, including price, category, description, shipping info, return policy, warranty information, and stock availability, so I can decide whether to buy it.

- **Women's Apparel Product Detail:**
  - As a user, I want to view detailed information about a specific women's apparel product, including price, category, description, shipping info, return policy, warranty information, and stock availability, so I can decide whether to buy it.

- **Add to Cart Functionality:**
  - As a user, I want a button to buy or add a product to my cart from the product detail page (It doesn't have to actually go anywhere).

## Acceptance Criteria for Fake E-Commerce Site Project

### 1. Project Structure and Setup
- The project **must be built using React.js** and adhere to React best practices, including the use of functional components, hooks, and component composition.
- The project **must be structured** in a logical and organized manner, with components, pages, and utility files placed in appropriate directories (e.g., `/components`, `/pages`).
- The project **must include a `.gitignore` file** to avoid committing unnecessary files like `node_modules`.

## 2. API Integration
- The project **must use the Fake Store API** to fetch product data for at least one category (Jewelry).
- API requests **must be made using Axios** to ensure consistency and ease of error handling.
- The project **must handle API errors gracefully**, providing appropriate feedback to users if data cannot be fetched.

## 3. User Interface and User Experience
- The project **must include a functional navigation bar** that allows users to easily switch between different product categories.
- The site **must display a loading indicator** while data is being fetched from the API to enhance the user experience.
- Product listings **must be displayed in a clean and user-friendly format**, with options to view more details or add items to the cart.
- The project **must include a responsive design**, ensuring the site is usable on various devices (e.g., desktop, tablet, mobile).

## 4. Documentation
- The project **must include a `README.md` file** that provides an overview of the project, including setup instructions, technologies used, and how to run the project locally.
- The `README.md` **must include detailed instructions** on how to install dependencies and start the development server.
- **API endpoints used** in the project should be documented in the README.

## 5. Version Control (Extra credit)
- The project **must be version-controlled using Git** and include a clear commit history that documents the development process.
- Do your best to make commits **atomic and descriptive**, making it easy to follow the progress of the project and understand changes.

## NOTE:

### Key Characteristics of an Atomic Commit:
- **Single Purpose:** The commit should address only one issue or make one change. For example, a commit that adds a new feature should not also include unrelated refactoring or changes to other parts of the codebase.
- **Self-Contained:** The commit should leave the codebase in a functional state. Each commit should be able to stand alone without breaking the build or causing issues.
- **Easily Revertible:** If something goes wrong, an atomic commit can be easily reverted without affecting other unrelated changes.

### Benefits:
- **Clarity:** Atomic commits make it easier to understand the history of a project, as each commit has a clear and specific purpose.
- **Ease of Debugging:** When troubleshooting, you can pinpoint exactly when a change was made and what it affected, making it easier to identify and fix issues.
- **Collaborative Development:** In team environments, atomic commits help in code reviews and collaboration, as they make changes easier to follow and understand.

