function createExperienceCards(experiences) {

    const cardsContainer =
        document.querySelector("#experience-container");

    cardsContainer.innerHTML = "";

    experiences.forEach((experience) => {

        // =========================
        // Card
        // =========================

        const card = document.createElement("article");
        card.classList.add("experience-card");


        // =========================
        // Header
        // =========================

        const header = document.createElement("div");
        header.classList.add("experience-header");


        // Company & Role
        const titleContainer = document.createElement("div");


        // Company
        const company = document.createElement("h3");
        company.textContent = experience.company;


        // Role
        const role = document.createElement("h4");
        role.textContent = experience.role;


        titleContainer.append(
            company,
            role
        );


        // Date
        const date = document.createElement("span");
        date.classList.add("experience-date");

        date.textContent =
            `${experience.startDate} – ${experience.endDate}`;


        header.append(
            titleContainer,
            date
        );


        // =========================
        // Location
        // =========================

        const location = document.createElement("p");
        location.classList.add("experience-location");

        location.textContent =
            experience.location;


        // =========================
        // Responsibilities
        // =========================

        const description = document.createElement("ul");
        description.classList.add("experience-description");


        experience.responsibilities.forEach((responsibility) => {

            const item = document.createElement("li");

            item.textContent = responsibility;

            description.appendChild(item);

        });


        // =========================
        // Skills
        // =========================

        const tags = document.createElement("div");
        tags.classList.add("experience-tags");


        experience.skills.forEach((skill) => {

            const tag = document.createElement("span");

            tag.textContent = skill;

            tags.appendChild(tag);

        });


        // =========================
        // Append Elements
        // =========================

        card.append(
            header,
            location,
            description,
            tags
        );


        // =========================
        // Add card to page
        // =========================

        cardsContainer.appendChild(card);

    });
}

document.addEventListener("DOMContentLoaded", () => {

    createExperienceCards(App.experience);

});

function createSkills(skills) {

    const skillsContainer =
        document.querySelector("#skills-container");

    skillsContainer.innerHTML = "";

    skills.forEach((skill) => {

        // Create skill tag
        const skillTag = document.createElement("span");

        skillTag.classList.add("skill-tag");

        // Skill name
        skillTag.textContent = skill;

        // Add skill to container
        skillsContainer.appendChild(skillTag);

    });
}

document.addEventListener("DOMContentLoaded", () => {

    createExperienceCards(App.experience);

    createSkills(App.skills);

});