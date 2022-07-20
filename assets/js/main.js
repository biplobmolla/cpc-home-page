var navMenuIcon = document.querySelector(".nav__menu__icon");
var navMenuCloseIcon = document.querySelector(".nav__menu__close__icon");
var menu = document.querySelector(".menu");

navMenuIcon.addEventListener("click", () => {
    menu.style.right = "0";
});

navMenuCloseIcon.addEventListener("click", () => {
    menu.style.right = "-200%";
});

var selecListShowBtn = document.querySelectorAll(".selected__value .fa-sort-down");
var selectCloseBtn = document.querySelectorAll(".select__menu__close__btn");
var selectMenuList = document.querySelectorAll(".pop__up__menu");

for (let i = 0; i < selectMenuList.length; i++) {
    selecListShowBtn[i].addEventListener("click", () => {
        selectMenuList[i].style = "display: block; opacity: 1; transform: translateY(0);";
    });
    selectCloseBtn[i].addEventListener("click", () => {
        selectMenuList[i].style = "opacity: 0; transform: translateY(-50%); display: none;";
    });
}