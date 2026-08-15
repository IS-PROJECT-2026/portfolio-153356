document.addEventListener("DOMContentLoaded", () => {
    const projectGrid = document.getElementById("project-grid");

    // Fetch the project data from the JSON file
    fetch("project.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                // Create a card for each project
                const card = document.createElement("div");
                card.className = "project-card";

                // Format the tech stack tags
                const techTags = project.techStack.map(tech => `<span class="tag">${tech}</span>`).join("");

                // Inject the HTML inside the card
                card.innerHTML = `
                    <span class="category-label">${project.category}</span>
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${techTags}
                    </div>
                `;

                // Add the card to the grid
                projectGrid.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
});