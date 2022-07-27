// Nav Menu

var navMenuIcon = document.querySelector(".menu__icon");
var navCloseIcon = document.querySelectorAll("nav .fa-xmark");
var navMenu = document.querySelector("nav ul li .menu");

navMenuIcon.addEventListener("click", () => {
    navMenu.style = "right: 0;";
});

for (let i = 0; i < navCloseIcon.length; i++) {
    navCloseIcon[i].addEventListener("click", () => {
        navMenu.style = "right: -200%;";
    });
}

// Add User Modal


var addUserBtn = document.querySelector(".user__add__btn");
var addUserModal = document.querySelector(".add__user__modal");
var darkBg = document.querySelector(".dark__bg");
var closeAddUserModal = document.querySelector(".close__add__user__modal");


if (addUserBtn) {
    addUserBtn.addEventListener("click", () => {
        darkBg.style = "display: block;";
        addUserModal.style = "bottom: 50%;";
    });
}

if (closeAddUserModal) {
    closeAddUserModal.addEventListener("click", () => {
        addUserModal.style = "bottom: -200%;";
        darkBg.style = "display: none;";
    });
}

// Add Blog Modal

var addBlogBtn = document.querySelector(".blog__add__btn");
var addBlogModal = document.querySelector(".add__blog__modal");
var darkBg = document.querySelector(".dark__bg");
var closeAddBlogModal = document.querySelector(".close__add__blog__modal");

if (addBlogBtn) {
    addBlogBtn.addEventListener("click", () => {
        darkBg.style = "display: block;";
        addBlogModal.style = "bottom: 50%;";
    });
}

if (closeAddBlogModal) {
    closeAddBlogModal.addEventListener("click", () => {
        addBlogModal.style = "bottom: -200%;";
        darkBg.style = "display: none;";
    });
}

var userEditBtn = document.querySelectorAll(".user__edit__btn");
var eventEditBtn = document.querySelectorAll(".event__edit__btn");
var blogEditBtn = document.querySelectorAll(".blog__edit__btn");

if (userEditBtn) {
    for (let i = 0; i < userEditBtn.length; i++) {
        userEditBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block;";
            // var userName = document.querySelector(".user__name").innerText.split(" ");
            // var userFname = tmpName[0];
            // var userLname = tmpName[1];
            // var userRole = document.querySelector(".user__role").innerText;
            addUserModal.style = "bottom: 50%;";
        });
    }
}

if (blogEditBtn) {
    for (let i = 0; i < blogEditBtn.length; i++) {
        blogEditBtn[i].addEventListener("click", () => {
            addBlogModal.style = "bottom: -200%;";
            darkBg.style = "display: none;";
        });
    }
}

// if (eventEditBtn) {
//     for (let i = 0; i < eventEditBtn.length; i++) {
//         eventEditBtn[i].addEventListener("click", () => {

//         });
//     }
// }

// Message Modal Start

var messageModal = document.querySelector(".message__modal");
var userDeleteBtn = document.querySelectorAll(".user__delete__btn");
var eventDeleteBtn = document.querySelectorAll(".event__delete__btn");
var blogDeleteBtn = document.querySelectorAll(".blog__delete__btn");


if (userDeleteBtn) {
    for (let i = 0; i < userDeleteBtn.length; i++) {
        userDeleteBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block !important;";
            messageModal.style = "bottom: 50% !important;";
        });
    }
}
if (eventDeleteBtn) {
    for (let i = 0; i < eventDeleteBtn.length; i++) {
        eventDeleteBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block !important;";
            messageModal.style = "bottom: 50% !important;";
        });
    }
}
if (blogDeleteBtn) {
    for (let i = 0; i < blogDeleteBtn.length; i++) {
        blogDeleteBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block !important;";
            messageModal.style = "bottom: 50% !important;";
        });
    }
}



var messageModalCloseBtn = document.querySelector(".message__modal .fa-xmark");


if (messageModalCloseBtn) {
    messageModalCloseBtn.addEventListener("click", () => {
        darkBg.style = "display: none !important;";
        messageModal.style = "bottom: -200% !important;";
    });
}


var userMessageBtn = document.querySelectorAll(".message__modal a");


for (let i = 0; i < 2; i++) {
    if (userMessageBtn[i]) {
        userMessageBtn[i].addEventListener("click", () => {
            darkBg.style = "display: none !important;";
            messageModal.style = "bottom: -200% !important;";
        });
    }
}





// Message Modal End