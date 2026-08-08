
// Add items to the select option
const button = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

const home = document.querySelector('#home');
button.addEventListener('click', ()=> {

    navigation.classList.toggle('open');
    button.classList.toggle('open');
})

//Display featured projects



function createFeaturedProjectCards(projects) {

    const cardsContainer = document.querySelector(".featured-projects");
    cardsContainer.innerHTML = "";

    projects.forEach((project) => {

        // Card
        const card = document.createElement("section");
        card.classList.add("project-card");

        // Image
        const img = document.createElement("img");
        img.src = project.imageUrl;
        img.alt = project.projectName;
        img.loading = "lazy";

        // Project Name
        const name = document.createElement("h3");
        name.textContent = project.projectName;

        // Location & Year
        const info = document.createElement("p");
        info.classList.add("project-info");
        info.textContent = `${project.location} • ${project.year}`;

        // Resume
        const resume = document.createElement("p");
        resume.classList.add("resume");
        resume.textContent = project.resume;

        // Button
        const button = document.createElement("button");
        button.classList.add("project-btn");
        button.textContent = "View Details";

        button.addEventListener("click", () => {
            window.location.href = "projects.html";
        });

        button.addEventListener("click", () => {
            openProjectModal(project); // La crearemos después
        });

        // Append Elements
        card.append(
            img,
            name,
            info,
            resume,
            button
        );

        // Add card to page
        cardsContainer.appendChild(card);

    });

}


document.addEventListener('DOMContentLoaded', ()=>{
const featuredProjects = App.projects
    .filter(project => project.featured)
    .slice(0, 3);

createFeaturedProjectCards(featuredProjects);
createEducationCards(App.education);
})


function createEducationCards(education) {

    const educationContainer =
        document.querySelector(".education-container");

    educationContainer.innerHTML = "";

    education.forEach((item) => {

        // Education item
        const educationItem =
            document.createElement("article");

        educationItem.classList.add("education-item");


        // =========================
        // Header
        // =========================

        const header =
            document.createElement("div");

        header.classList.add("education-header");


        // Degree
        const degree =
            document.createElement("h3");

        degree.textContent = item.degree;


        // Date
        const date =
            document.createElement("span");

        date.classList.add("education-date");

        date.textContent = item.date;


        // Append header elements
        header.append(
            degree,
            date
        );


        // =========================
        // Institution
        // =========================

        const institution =
            document.createElement("h4");

        institution.classList.add("education-institution");

        institution.textContent =
            item.institution;


        // =========================
        // Location
        // =========================

        const location =
            document.createElement("p");

        location.classList.add("education-location");

        location.textContent =
            item.location;


        // =========================
        // Highlights
        // =========================

        const highlights =
            document.createElement("ul");

        highlights.classList.add("education-highlights");


        item.highlights.forEach((highlight) => {

            const listItem =
                document.createElement("li");

            listItem.textContent = highlight;

            highlights.appendChild(listItem);

        });


        // =========================
        // Append Education Item
        // =========================

        educationItem.append(
            header,
            institution,
            location,
            highlights
        );


        // =========================
        // Add to container
        // =========================

        educationContainer.appendChild(
            educationItem
        );

    });
}