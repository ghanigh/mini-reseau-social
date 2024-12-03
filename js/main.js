// Activer le mode "neumorphisme" pour les boutons au clic
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mousedown", () => {
      button.style.boxShadow = "inset 5px 5px 15px #aaa, inset -5px -5px 15px #fff";
    });
    button.addEventListener("mouseup", () => {
      button.style.boxShadow = "5px 5px 15px #aaa, -5px -5px 15px #fff";
    });
  });
  
  // Gestion de la navigation (si un menu ou une barre de navigation est utilisée)
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetPage = link.getAttribute("href");
      window.location.href = targetPage;
    });
  });
  
  // Fonction pour afficher un message global ou une alerte (par exemple, au chargement d'une page)
  function showAlert(message, type = "info") {
    const alertBox = document.createElement("div");
    alertBox.className = `alert ${type}`;
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
  
    setTimeout(() => {
      alertBox.remove();
    }, 3000); // Supprime le message après 3 secondes
  }
  
  // Exemple d'utilisation : affiche un message au chargement
  window.addEventListener("DOMContentLoaded", () => {
    showAlert("Bienvenue sur votre mini-réseau social !", "success");
  });
  
  // Fonction pour basculer un thème clair/sombre (dark mode)
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDarkMode = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDarkMode ? "🌞 Mode Clair" : "🌙 Mode Sombre";
    });
  }
  
  // Gérer les animations globales lors du scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  