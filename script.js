const projects = [
    {
        title: "Breakout Game",
        description: "Classic breakout game using JavaScript.",
        folder: "breakout-game-main",
        preview: "projects/breakout-game-main/preview.gif"
    },
    {
        title: "Calculator App",
        description: "A simple calculator built with JavaScript.",
        folder: "calculator-master",
        preview: "projects/calculator-master/preview.gif"
    },
    {
        title: "Form Validator",
        description: "A form validation project using JavaScript.",
        folder: "form-validator-main",
        preview: "projects/form-validator-main/preview.gif"
    },
    {
        title: "HTML5 Canvas Drawing",
        description: "Drawing app using HTML5 Canvas.",
        folder: "HTML5-Canvas-master",
        preview: "projects/HTML5-Canvas-master/preview.gif"
    },
    {
        title: "Paint 2.0",
        description: "An advanced paint application.",
        folder: "paint-2.0-master",
        preview: "projects/paint-2.0-master/preview.gif"
    },
    {
        title: "Picture-in-Picture",
        description: "Picture-in-picture video feature.",
        folder: "picture-in-picture-main",
        preview: "projects/picture-in-picture-main/preview.gif"
    },
    {
        title: "Pong Game",
        description: "Classic Pong game using JavaScript.",
        folder: "pong-game-master",
        preview: "projects/pong-game-master/preview.gif"
    }
];

// Function to show search overlay
const showSearchOverlay = () => {
    const searchOverlay = document.getElementById("search-overlay");
    searchOverlay.classList.remove("hidden");
    displayProjectsOverlay(projects);  // Display all projects in the overlay
};

// Function to close search overlay
const closeSearchOverlay = () => {
    const searchOverlay = document.getElementById("search-overlay");
    searchOverlay.classList.add("hidden");
};

// Function to search and display projects in the overlay
const searchProjectsOverlay = (query) => {
    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProjectsOverlay(filteredProjects);
};

// Function to display projects in the overlay
const displayProjectsOverlay = (projectsToDisplay) => {
    const projectsContainer = document.getElementById("projects-container-overlay");
    projectsContainer.innerHTML = '';  // Clear existing projects in the overlay

    projectsToDisplay.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('p-4', 'bg-gray-800', 'rounded-lg', 'shadow-lg', 'hover:scale-105', 'transition-all', 'relative', 'overflow-hidden');

        projectCard.innerHTML = `
            <div class="project-card group relative w-full h-64 rounded-lg overflow-hidden">
                <img src="${project.preview}" alt="${project.title} preview" class="project-preview absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy">
                
                <div class="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 w-full text-center rounded-b-lg">
                    <h3 class="text-xl font-semibold">${project.title}</h3>
                    <p class="text-sm text-gray-300">${project.description}</p>
                </div>
            </div>
        `;

        // Click event to open project
        projectCard.addEventListener('click', () => {
            window.location.href = `projects/${project.folder}/index.html`;
        });

        projectsContainer.appendChild(projectCard);
    });
};

// Initialize Swiper for main projects
const swiperContainer = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Initialize search functionality for overlay
document.getElementById("search-btn").addEventListener("click", showSearchOverlay);
document.getElementById("close-search").addEventListener("click", closeSearchOverlay);
document.getElementById("search-bar").addEventListener("input", (e) => {
    searchProjectsOverlay(e.target.value);
});

// Display all projects in the main swiper container
const displayProjectsMain = (projectsToDisplay) => {
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = '';  // Clear existing projects

    projectsToDisplay.forEach(project => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide', 'p-4', 'rounded-lg', 'bg-gray-800', 'shadow-lg', 'hover:scale-105', 'transition-all', 'relative', 'overflow-hidden');

        slide.innerHTML = `
            <div class="project-card group relative w-full h-64 rounded-lg overflow-hidden">
                <img src="${project.preview}" alt="${project.title} preview" class="project-preview absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy">
                
                <div class="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 w-full text-center rounded-b-lg">
                    <h3 class="text-xl font-semibold">${project.title}</h3>
                    <p class="text-sm text-gray-300">${project.description}</p>
                </div>
            </div>
        `;

        slide.addEventListener('click', () => {
            window.location.href = `projects/${project.folder}/index.html`;
        });

        projectsContainer.appendChild(slide);
    });
};

// Initialize main page projects display
displayProjectsMain(projects);

// Set the current year in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();
