
const header = document.getElementById("header");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav__menu a[href^='#']");
const sections = document.querySelectorAll("section[id]");
const form = document.querySelector(".contact-form");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("scroll-header", window.scrollY >= 24);
}

function closeMenu() {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  if (!navMenu || !navToggle) return;
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

function updateActiveLink() {
  let activeId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      activeId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("active-link", isActive);
  });
}

if (navToggle) {
  navToggle.addEventListener("click", toggleMenu);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});

window.addEventListener("scroll", () => {
  updateHeaderState();
  updateActiveLink();
});

window.addEventListener("load", () => {
  updateHeaderState();
  updateActiveLink();
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.addEventListener("click", (event) => {
  if (!navMenu || !navToggle) return;
  if (!navMenu.classList.contains("is-open")) return;
  if (navMenu.contains(event.target) || navToggle.contains(event.target)) return;
  closeMenu();
});

const year = document.getElementById("current-year");
if (year) {
  year.textContent = new Date().getFullYear();
}

if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "24px",
    duration: 900,
    delay: 100,
    reset: false,
  });

  sr.reveal(
    ".hero__content, .hero__visual, .section-heading, .skill-group, .primary-stack, .service-card, .project-card, .course-card, .timeline-card, .contact-line, .field",
    { interval: 70 }
  );
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        window.alert("Message sent successfully.");
        return;
      }

      window.alert("There was a problem sending your message.");
    } catch (error) {
      window.alert("There was a problem sending your message.");
    }
  });
}
