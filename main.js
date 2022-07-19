var navMenuIcon = document.querySelector(".nav__menu__icon");
var navMenuCloseIcon = document.querySelector(".nav__menu__close__icon");
var menu = document.querySelector(".menu");

navMenuIcon.addEventListener("click", () => {
    menu.style.right = "0";
});

navMenuCloseIcon.addEventListener("click", () => {
    menu.style.right = "-200%";
});