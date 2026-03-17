const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".navlinks");
const navItems = document.querySelectorAll(".navlinks li");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 1280) {
            navLinks.classList.remove("active");
        }
    });
});

function updateNavStateOnResize() {
    if (window.innerWidth > 1280) {
        navLinks.classList.remove("active");
    }
}

window.addEventListener("resize", updateNavStateOnResize);
updateNavStateOnResize();

window.addEventListener("load", () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "auto", block: "start" });
    }

    if (window.location.hash && window.location.hash !== "#about") {
        history.replaceState(null, null, `${window.location.pathname}${window.location.search}#about`);
    }
});

const typed = new Typed('.multiple-text', {
  strings: [
    'Btech CSE Student',
    'MERN Stack Developer',
    'Software Engineer',
    'AI Enthusiast'
  ],
  typeSpeed: 80,
  backSpeed: 60,
  backDelay: 1500,
  loop: true
});