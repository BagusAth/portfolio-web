# Personal Portfolio Website

This is a responsive personal portfolio website designed to showcase my projects, skills, and professional journey as an AI/ML enthusiast.



---

## Description

This portfolio provides a comprehensive look at my background and capabilities. It features a clean, modern design with smooth animations and a user-friendly interface. The site includes sections for my biography, education, work experience, and a detailed showcase of my latest projects. It is fully responsive and optimized for viewing on various devices, from desktops to mobile phones.

---

## Technologies Used

The core technologies used to build this portfolio are:

* **HTML5:** For the structure and content of the website.
* **CSS3:** For styling, layout, animations, and responsive design.
* **JavaScript (ES6):** For interactive features like the navigation menu, scroll animations, and the dynamic project modal.
* **Boxicons:** For the icons used throughout the website.

---

## Features

This portfolio is packed with features to create an engaging user experience:

* **Fully Responsive Design:** Adapts seamlessly to any screen size.
* **Sticky Navigation Bar:** The header locks to the top of the screen for easy navigation as the user scrolls.
* **Active Link Highlighting:** The navigation link corresponding to the section in view is automatically highlighted.
* **Interactive Project Showcase:**
    * Project cards are animated to appear as they scroll into view.
    * A "View Details" button opens a dynamic modal window with more information.
* **Project Details Modal:**
    * An **Image Carousel** with next/previous buttons, indicators, and touch/swipe support to display multiple project images.
    * A detailed project description, a list of technologies used, and links to the source code (GitHub), live demo, and a PDF document.
* **Smooth Scrolling & Animations:** Subtle animations on buttons, social media links, and other elements enhance the user experience.

---

## Setup Instructions

To run this project on your local machine, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/BagusAth/portfolio-web.git](https://github.com/BagusAth/portfolio-web.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd portfolio-web
    ```
3.  **Open the website:**
    Simply open the `index.html` file in your favorite web browser. No special servers or dependencies are required.

---

## AI Support Explanation

During the development of this portfolio, I leveraged Artificial Intelligence (AI) as an assistant to accelerate the workflow and enhance the code quality. The roles of AI in this project included:

* **Code Generation & Refinement:** AI was used to generate boilerplate code for complex features, such as the `createImageCarousel()` and `initCarousel()` functions in `script.js`. Additionally, AI helped in refactoring code blocks for better efficiency and readability, for instance, within the `window.onscroll` event listener.
* **Rapid Debugging:** When encountering challenging bugs or errors, I utilized AI to analyze code snippets. For example, AI assisted in identifying logical issues with setting the `.active` class for the navigation links and ensuring the project modal transitions worked smoothly.
* **Content Creation:** The descriptive text in sections like "About Me" and the project descriptions within the `projectData` object were written and polished with the help of AI to ensure proper grammar and clarity.
* **Feature Conceptualization:** Before writing the code, I brainstormed with AI to design the optimal structure and logic for new features. A key example was designing the workflow for the project modal, from fetching project data to initializing the image slider within it.

Overall, AI acted as a collaborative partner, boosting productivity and allowing me to focus more on high-level design and functionality aspects.
