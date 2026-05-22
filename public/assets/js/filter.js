export function applyFilters() {
  const filters = [
    { checkbox: "filter-online", className: "online-projet" },
    { checkbox: "filter-student", className: "student-projet" },
    { checkbox: "filter-front", className: "front-projet" },
    { checkbox: "filter-fullstack", className: "fullstack-projet" },
    { checkbox: "filter-php", className: "php-projet" },
    { checkbox: "filter-symfony", className: "symfony-projet" },
  ];

  const hasActiveFilter = filters.some(
    (filter) => document.getElementById(filter.checkbox).checked,
  );

  // Tous les projets
  const allProjects = document.querySelectorAll(".project");

  // Si aucun filtre actif → tout afficher
  if (!hasActiveFilter) {
    allProjects.forEach((project) => {
      project.style.display = "flex";
    });

    return;
  }

  // Sinon on cache tout
  allProjects.forEach((project) => {
    project.style.display = "none";
  });

  // Réafficher ceux des filtres cochés
  filters.forEach((filter) => {
    const isChecked = document.getElementById(filter.checkbox).checked;

    if (isChecked) {
      const projects = document.getElementsByClassName(filter.className);

      for (const project of projects) {
        project.style.display = "flex";
      }
    }
  });
}
