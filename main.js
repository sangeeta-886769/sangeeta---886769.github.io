const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
const scrollRevealOption = {
    distance: "50px",
    original: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});