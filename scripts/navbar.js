const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbar-nav");

hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("show"); 
});
