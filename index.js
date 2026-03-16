const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".navlinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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