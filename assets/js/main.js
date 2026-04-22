/*=============== HEADER STATE ===============*/
const header = document.getElementById("header");

function updateHeaderState() {
  if (!header) return;
  header.classList.toggle("scroll-header", window.scrollY >= 24);
}

window.addEventListener("scroll", updateHeaderState);
updateHeaderState();

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    modalViews[index]?.classList.add("active-modal");
    document.body.classList.add("modal-open");
  });
});

function closeServiceModals() {
  modalViews.forEach((modal) => modal.classList.remove("active-modal"));
  document.body.classList.remove("modal-open");
}

modalClose.forEach((button) => {
  button.addEventListener("click", closeServiceModals);
});

modalViews.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeServiceModals();
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeServiceModals();
});

/*=============== ACTIVE NAV LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__menu a[href^='#']");

function updateActiveLink() {
  let activeId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      activeId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active-link",
      link.getAttribute("href") === `#${activeId}`
    );
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);
updateActiveLink();

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "28px",
    duration: 900,
    delay: 120,
    reset: false,
  });

  sr.reveal(
    ".about__box, .skills__content, .services__card, .contact__card, .contact__form-div",
    { interval: 70 }
  );
}
