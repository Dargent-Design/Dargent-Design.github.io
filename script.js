const header = document.querySelector(".site-header");
const projets = document.querySelector("#projets");

/* Détection simple : si #projets existe, on est sur l’accueil */
document.body.classList.toggle("is-home", !!projets);

/* Accueil : header caché puis apparaît aux projets */
if (header && projets) {
  header.classList.add("is-hidden");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) header.classList.remove("is-hidden");
      else header.classList.add("is-hidden");
    },
    { threshold: 0.05 }
  );

  observer.observe(projets);
}

/* Pages projet : header toujours visible */
if (header && !projets) {
  header.classList.remove("is-hidden");
}
