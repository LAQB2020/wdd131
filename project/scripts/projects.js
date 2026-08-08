// ================================
// Store all projects
// ================================

let allProjects = [];

// ================================
// Create Project Cards
// ================================

function createProjectCard(projects) {

    const cardsContainer = document.querySelector("#projects-container");

    cardsContainer.innerHTML = "";

    projects.forEach(project => {

        // ===============================
        // Card
        // ===============================

        const card = document.createElement("article");
        card.classList.add("project-card");

        // ===============================
        // Image
        // ===============================

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("project-image");

        const img = document.createElement("img");
        img.src = project.imageUrl;
        img.alt = project.projectName;
        img.loading = "lazy";

        imageContainer.appendChild(img);

        // ===============================
        // Information
        // ===============================

        const info = document.createElement("div");
        info.classList.add("project-info");

        // Types

        const typeContainer = document.createElement("div");
        typeContainer.classList.add("type-container");

        project.type.forEach(type => {

            const badge = document.createElement("span");
            badge.classList.add("type-badge");
            badge.textContent = type;

            typeContainer.appendChild(badge);

        });

        // Title

        const title = document.createElement("h3");
        title.textContent = project.projectName;

        // Company

        const company = document.createElement("p");
        company.classList.add("company");
        company.textContent = project.company;

        // Role

        const role = document.createElement("p");
        role.classList.add("role");
        role.textContent = project.role;

        // Meta

        const meta = document.createElement("div");
        meta.classList.add("project-meta");

        const location = document.createElement("span");
        location.classList.add("location");
        location.textContent = `📍 ${project.location}`;

        const year = document.createElement("span");
        year.classList.add("year");
        year.textContent = `📅 ${project.year}`;

        meta.append(location, year);

        // Description

        const description = document.createElement("p");
        description.classList.add("resume");
        description.textContent = project.fullInformation;

        // Technologies

        const techContainer = document.createElement("div");
        techContainer.classList.add("tech-container");

        project.technologies.forEach(tech => {

            const badge = document.createElement("span");
            badge.classList.add("tech-badge");
            badge.textContent = tech;

            techContainer.appendChild(badge);

        });

        info.append(
            typeContainer,
            title,
            company,
            role,
            meta,
            description,
            techContainer
        );

        // ===============================
        // Impact
        // ===============================

        const side = document.createElement("aside");
        side.classList.add("project-side");

        const impactContainer = document.createElement("div");
        impactContainer.classList.add("impact-container");

        project.impact.forEach(item => {

            const badge = document.createElement("span");
            badge.classList.add("impact-badge");
            badge.textContent = item;

            impactContainer.appendChild(badge);

        });

        side.appendChild(impactContainer);

        // ===============================
        // Append
        // ===============================

        card.append(
            imageContainer,
            info,
            side
        );

        cardsContainer.appendChild(card);

    });

}

// ================================
// Filter Buttons
// ================================

function setupFilters() {

    const buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // Active button

            buttons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            // Selected filter

            const filter = button.dataset.filter;

            // Show all

            if (filter === "all") {

                createProjectCard(allProjects);

                return;

            }

            // Filter projects

            const filteredProjects = allProjects.filter(project =>
                project.type.includes(filter)
            );

            createProjectCard(filteredProjects);

        });

    });

}

// ================================
// Initialize
// ================================

document.addEventListener("DOMContentLoaded", () => {

    allProjects = App.projects;

    createProjectCard(allProjects);

    setupFilters();

});