const aside_hamburger = document.getElementById("aside_hamburger");
const aside = document.getElementById("aside");
const aside_navbar = document.getElementById("aside-navbar");
const aside_navbarNavs = document.getElementsByClassName("aside-navbar-nav");
const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbar-nav");

aside_hamburger.addEventListener("click", () => {
if(aside_hamburger.firstElementChild.innerText === 'expand_more'){
    aside_hamburger.firstElementChild.innerText = 'expand_less';
}else{
    aside_hamburger.firstElementChild.innerText = 'expand_more';
}
aside.classList.toggle("beautify-aside");
aside_navbar.classList.toggle("show-navbar"); 
Array.from(aside_navbarNavs).forEach( ele => ele.classList.toggle("show"));
})

hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("show"); 
});
