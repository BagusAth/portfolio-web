// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            // Animation for projects when scrolled into view
            if(id === 'project') {
                animateProjectCards();
            }
        }
    });
    
    // sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Project cards animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, 200 * index);
    });
}

// Modal functionality
const modal = document.getElementById('project-modal');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

// Project data
const projectData = {
    project1: {
        title: "Computer Vision Project",
        images: [
            "images/cvp3.png",
            "images/cvp.png",
            "images/cvp1.png",
            "images/cvp2.png"
        ],
        description: "This project develops a smart rat repellent device that combines computer vision–based AI detection with IoT control and eco-friendly natural extracts for effective and sustainable rodent management.",
        longDescription: "This project develops a smart rat repellent device that integrates Artificial Intelligence (AI), Internet of Things (IoT), and eco-friendly natural extracts. The system uses Methyl anthranilate, a plant-derived compound, to repel rats in a safe and environmentally friendly way. A Raspberry Pi with a connected camera applies computer vision to detect rat movements in real-time. The detection model is based on YOLOv8, trained through the Roboflow platform to accurately recognize rats and send signals to an Arduino-controlled spraying mechanism. This innovation combines modern AI with natural repellents, offering an effective, sustainable, and intelligent solution for rat control",
        techStack: ["Python", "OpenCV", "TensorFlow", "Yolo", "NumPy", "CUDA"],
        pdf: "https://drive.google.com/file/d/1xLO3a4Cj9_3akEy3gcfmW8JRtXejqiNH/view?usp=sharing"
    },
    project2: {
        title: "IoT and AI Project",
        images: [
            "images/medibox1.png",
            "images/medibox2.png",
            "images/medibox.png",
            "images/medibox3.png",
            "images/medibox4.png",
            "images/medibox5.png"
        ],
        description: "MediBox is smart IoT-based medicine box enhanced with AI for elderly care, enabling medication reminders, condition monitoring, and personalized health recommendations.",
        longDescription: "The project introduces MediBox, a smart medicine box designed to help elderly people manage their daily medication. It addresses issues such as memory loss, poor eyesight, and the absence of 24/7 caregivers by providing automated reminders and easy-to-use features. The IoT system integrates sensors (LDR, DHT11, ESP32, buzzer, LED, and Wi-Fi) to monitor medication schedules, storage conditions, and user interaction. Meanwhile, AI powered by the Gemini API analyzes self-diagnosis inputs through a Streamlit app to give personalized health and dietary recommendations. Together, IoT and AI create a reliable, user-friendly solution that improves medication adherence, reduces health risks, and eases the burden on families and caregivers.",
        techStack: ["Python", "Flask", "TensorFlow", ""],
        github: "https://github.com/BagusAth/medibox",
        demo: "https://medibox.streamlit.app/",
        pdf: "https://drive.google.com/file/d/1x6lMysBo_cHA1Z63gtEW4W-AjfE1OdTe/view?usp=sharing"
    },
    project3: {
        title: "E-commerce Platform",
        images: [
            "images/project3.jpg",
            "images/project3-screenshot1.jpg",
            "images/project3-screenshot2.jpg",
            "images/project3-screenshot3.jpg"
        ],
        description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
        longDescription: "This e-commerce platform is a comprehensive solution for online retailers, featuring user authentication, product management, shopping cart functionality, and secure payment processing. The application follows a microservices architecture for scalability and maintainability. The frontend provides an intuitive user interface with responsive design principles, while the backend handles data persistence, business logic, and third-party integrations. Security features include JWT authentication, input validation, and encryption for sensitive data. The platform also includes an admin dashboard for inventory management, order processing, and customer analytics.",
        techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT", "Stripe API"],
        github: "https://github.com/BagusAth/ecommerce-platform",
        demo: "https://ecommerce-demo.example.com"
    },
    project4: {
        title: "Data Visualization Dashboard",
        images: [
            "images/project4.jpg",
            "images/project4-screenshot1.jpg",
            "images/project4-screenshot2.jpg",
            "images/project4-screenshot3.jpg"
        ],
        description: "An interactive dashboard for visualizing complex datasets with filtering capabilities.",
        longDescription: "This data visualization dashboard transforms complex datasets into intuitive, interactive visual representations that help users identify patterns, trends, and insights. The application features multiple visualization types including bar charts, line graphs, heat maps, and scatter plots, all of which update dynamically based on user selections. Advanced filtering capabilities allow users to drill down into specific subsets of data. The dashboard is optimized for performance, handling large datasets efficiently through data aggregation and lazy loading techniques. It's designed for both technical and non-technical users, making data exploration accessible to everyone in an organization.",
        techStack: ["D3.js", "JavaScript", "HTML5", "CSS Grid", "SVG", "Web Components"],
        github: "https://github.com/BagusAth/data-viz-dashboard",
        demo: "https://dataviz-demo.example.com"
    }
};

// Create image slider/carousel for the modal
function createImageCarousel(images, title) {
    let carouselHTML = `
        <div class="image-carousel">
            <div class="carousel-container">
    `;
    
    // Add slides
    images.forEach((image, index) => {
        carouselHTML += `
            <div class="carousel-slide ${index === 0 ? 'active' : ''}">
                <img src="${image}" alt="${title} - Image ${index + 1}">
            </div>
        `;
    });
    
    // Add navigation buttons
    carouselHTML += `
            </div>
            <button class="carousel-btn prev-btn"><i class='bx bx-chevron-left'></i></button>
            <button class="carousel-btn next-btn"><i class='bx bx-chevron-right'></i></button>
            <div class="carousel-indicators">
    `;
    
    // Add indicators
    images.forEach((_, index) => {
        carouselHTML += `
            <span class="indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
        `;
    });
    
    carouselHTML += `
            </div>
        </div>
    `;
    
    return carouselHTML;
}

// Handle carousel navigation
function initCarousel() {
    const carousel = document.querySelector('.image-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    let currentIndex = 0;
    
    // Function to update active slide
    function goToSlide(index) {
        // Handle index boundaries
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        // Update current index
        currentIndex = index;
        
        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentIndex].classList.add('active');
        
        // Update indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[currentIndex].classList.add('active');
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });
    
    // Event listeners for indicators
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const index = parseInt(indicator.getAttribute('data-index'));
            goToSlide(index);
        });
    });
    
    // Touch/swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const container = carousel.querySelector('.carousel-container');
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to register as swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left, go to next
            goToSlide(currentIndex + 1);
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go to previous
            goToSlide(currentIndex - 1);
        }
    }
}

// Open modal with project details
viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            modalDetails.innerHTML = `
                <h2>${project.title}</h2>
                ${createImageCarousel(project.images, project.title)}
                <p>${project.longDescription}</p>
                
                <div class="tech-used">
                    <h3>Technologies Used:</h3>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">
                        <i class='bx bxl-github'></i> View Source Code
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank">
                        <i class='bx bx-link-external'></i> Live Demo
                    </a>
                    <a href="${project.pdf}" class="project-link" target="_blank">
                        <i class='bx bxs-file-pdf'></i> View PDF
                    </a>
                </div>
            `;
            
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('show');
                initCarousel(); // Initialize the carousel after the modal is shown
            }, 10);
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if project section is in initial viewport
    const projectSection = document.getElementById('project');
    const rect = projectSection.getBoundingClientRect();
    
    if (rect.top < window.innerHeight) {
        animateProjectCards();
    }
});