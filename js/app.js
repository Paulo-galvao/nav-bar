const navBar = document.getElementById("nav-bar");
const navMob = document.querySelector(".nav-mob");
const bxMenu = document.querySelector(".bx-menu");

navMob.addEventListener("click", openMenu => {
    navBar.classList.toggle("nav-column");
    bxMenu.classList.toggle("bx-x");
});