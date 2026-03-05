// ======================================
// DATA
// ======================================
const skillCategories = [
  {
    category: "Langages",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript"],
  },
  {
    category: "Frameworks",
    skills: ["Laravel", "Django", "React.js", "ASP.NET", "Java Swing"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Bases de Donnees",
    skills: ["MySQL", "SQL Server", "Oracle", "PL/SQL", "T-SQL", "MongoDB", "NoSQL"],
  },
  {
    category: "Machine Learning",
    skills: ["Supervised Learning", "Modelisation Predictive", "Pretraitement", "MSE", "Accuracy"],
  },
  {
    category: "Modelisation",
    skills: ["Merise", "UML"],
  },
  {
    category: "Systemes & Outils",
    skills: ["Unix/Linux", "Word", "PowerPoint", "Excel"],
  },
];

const softSkills = [
  "Gestion de projets",
  "Esprit d'equipe",
  "Resolution de problemes",
  "Communication",
];

const academicProjects = [
  {
    title: "Plateforme de Cours en Ligne",
    module: "Developpement Web",
    description: "Realisation d'une plateforme complete de cours en ligne avec gestion des contenus et inscriptions.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Gestion de Parc Automobile",
    module: "Python avec Django",
    description: "Systeme de gestion d'un parc automobile avec suivi des vehicules et des maintenances.",
    tags: ["Python", "Django"],
  },
  {
    title: "Gestion d'un Centre Medical",
    module: "POO en C++",
    description: "Application de gestion d'un centre medical avec suivi des patients et rendez-vous.",
    tags: ["C++", "POO"],
  },
  {
    title: "Gestion des Cours Scolaires",
    module: "POO en C++",
    description: "Systeme de gestion des cours dans une ecole avec planification et suivi.",
    tags: ["C++", "POO"],
  },
  {
    title: "Gestion des Conferences",
    module: "Projet de fin d'annee",
    description: "Systeme complet de gestion des conferences avec inscriptions, planification et suivi.",
    tags: ["Python", "Django"],
  },
  {
    title: "Gestion Universitaire",
    module: "Laravel / MongoDB",
    description: "Systeme de gestion universitaire avec gestion des etudiants, modules et notes.",
    tags: ["Laravel", "MongoDB", "PHP"],
  },
  {
    title: "Gestion des Ressources Humaines",
    module: "Java Swing",
    description: "Application desktop de gestion des RH avec suivi des employes et des conges.",
    tags: ["Java", "Swing"],
  },
  {
    title: "Prediction du Taux d'Occupation",
    module: "Machine Learning",
    description: "Systeme de prediction du taux d'occupation d'un hotel utilisant des algorithmes de ML supervise.",
    tags: ["Python", "ML", "Supervised Learning"],
  },
];

const professionalProjects = [
  {
    title: "Site de Maintenance Informatique",
    company: "INFODIX",
    description: "Realisation d'un site web de maintenance et de gestion des equipements informatiques lors d'un stage de premiere annee.",
    tags: ["Web", "Stage"],
  },
];

const educations = [
  {
    degree: "Diplome d'Ingenieur d'Etat",
    status: "En cours",
    school: "Ecole Marocaine des Sciences de l'Ingenieur (EMSI)",
    location: "Rabat",
    period: "2024 - 2027",
    description: "Genie Informatique, specialisation Intelligence Artificielle & Data.",
  },
  {
    degree: "Classe Preparatoire MP",
    status: "Attestation de reussite",
    school: "Benghazi Academy",
    location: "Fes",
    period: "2022 - 2024",
    description: "Classes preparatoires aux grandes ecoles, filiere Mathematiques-Physique.",
  },
  {
    degree: "Baccalaureat Scientifique",
    status: "Option Francais",
    school: "Fes City Lycee",
    location: "Fes",
    period: "2021 - 2022",
    description: "Baccalaureat scientifique avec option langue francaise.",
  },
];

// ======================================
// NAVBAR - Scroll & Mobile Toggle
// ======================================
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  iconMenu.classList.toggle("hidden", isOpen);
  iconClose.classList.toggle("hidden", !isOpen);
  navToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

function closeMobile() {
  navLinks.classList.remove("open");
  iconMenu.classList.remove("hidden");
  iconClose.classList.add("hidden");
}

// ======================================
// RENDER SKILLS
// ======================================
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  let html = "";

  skillCategories.forEach((cat) => {
    html += `
      <div class="skill-card">
        <div class="skill-category">${cat.category}</div>
        <div class="skill-tags">
          ${cat.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>
    `;
  });

  // Soft skills
  html += `
    <div class="skill-card soft-skills">
      <div class="skill-category">Soft Skills</div>
      <div class="skill-tags">
        ${softSkills.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
      </div>
    </div>
  `;

  grid.innerHTML = html;
}

// ======================================
// RENDER PROJECTS
// ======================================
let currentTab = "academic";

function renderProjects(tab) {
  const grid = document.getElementById("projectsGrid");
  let html = "";

  if (tab === "academic") {
    academicProjects.forEach((p) => {
      html += `
        <div class="project-card">
          <div class="project-card-header">
            <span class="project-module">${p.module}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
    });
  } else {
    professionalProjects.forEach((p) => {
      html += `
        <div class="project-card professional">
          <div class="project-card-header">
            <span class="project-module">${p.company}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
          </div>
        </div>
      `;
    });
  }

  grid.innerHTML = html;
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
  renderProjects(tab);
}

// ======================================
// RENDER EDUCATION TIMELINE
// ======================================
function renderTimeline() {
  const timeline = document.getElementById("timeline");
  let html = "";

  educations.forEach((edu) => {
    html += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <span class="timeline-period">${edu.period}</span>
          <h3>${edu.degree}</h3>
          <p class="timeline-status">${edu.status}</p>
          <p class="timeline-school">${edu.school} &mdash; ${edu.location}</p>
          <p class="timeline-desc">${edu.description}</p>
        </div>
      </div>
    `;
  });

  timeline.innerHTML = html;
}

// ======================================
// SCROLL REVEAL ANIMATION
// ======================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".skill-card, .project-card, .highlight-card, .timeline-card, .contact-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
}

// ======================================
// INIT
// ======================================
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects("academic");
  renderTimeline();
  // Small delay to allow DOM to render before setting up scroll animations
  setTimeout(initScrollReveal, 100);
});
