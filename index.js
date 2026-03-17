const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".navlinks");
const navItems = document.querySelectorAll(".navlinks li a");

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