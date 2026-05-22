import { applyFilters } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments
  const elements = document.querySelectorAll(".fade-in");
  const filterInputs = document.querySelectorAll(".input-filter");
  if (!filterInputs) return;

  // Appliquer les effets
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

  // Filtrer en temps réel
  filterInputs.forEach((input) => {
    input.addEventListener("input", applyFilters);
    input.addEventListener("change", applyFilters);
  });
});
