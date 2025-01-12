function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed("#occupation", {
  strings: ["Front-End Developer","UI UX Designer","Back-End Developer", "Hardware Technician", "Network Technician","Database Designer"],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
});
