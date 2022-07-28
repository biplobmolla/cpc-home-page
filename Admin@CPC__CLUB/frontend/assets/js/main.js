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


var addBtn = document.querySelector(".add__btn");
var addModal = document.querySelector(".add__modal");
var darkBg = document.querySelector(".dark__bg");
var closeAddModal = document.querySelector(".close__add__modal");


if (addBtn) {
    addBtn.addEventListener("click", () => {
        darkBg.style = "display: block;";
        addModal.style = "bottom: 50%;";
    });
}

if (closeAddModal) {
    closeAddModal.addEventListener("click", () => {
        addModal.style = "bottom: -200%;";
        darkBg.style = "display: none;";
    });
}

// Add Blog Modal

var addBtn = document.querySelector(".add__btn");
var darkBg = document.querySelector(".dark__bg");
var userEditBtn = document.querySelectorAll(".user__edit__btn");
var eventEditBtn = document.querySelectorAll(".event__edit__btn");
var blogEditBtn = document.querySelectorAll(".blog__edit__btn");
var userUpdateBtn = document.querySelector(".user__edit__btn");
console.log(userEditBtn);

if (userEditBtn) {
    for (let i = 0; i < userEditBtn.length; i++) {
        userEditBtn[i].addEventListener("click", () => {
            userUpdateBtn.innerHTML = "<input type='submit' value='Update' id='updateUser' />";
            darkBg.style = "display: block;";
            addModal.style = "bottom: 50%;";
        });
    }
}

if (eventEditBtn) {
    for (let i = 0; i < eventEditBtn.length; i++) {
        eventEditBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block;";
            addBlogModal.style = "bottom: 50%;";
        });
    }
}

if (blogEditBtn) {
    for (let i = 0; i < blogEditBtn.length; i++) {
        blogEditBtn[i].addEventListener("click", () => {
            darkBg.style = "display: block;";
            addModal.style = "bottom: 50%;";
        });
    }
}

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



// Add Start

// Add User Start

var addUserBtn = document.querySelector("#addUser");

addUserBtn.addEventListener("click", () => {

})

// Add User End
// Add Blog Start

// var addBlogBtn = document.querySelector("#addBlog");

// addBlogBtn.addEventListener("click", () => {

// })

// Add Blog End
// Add Event Start

// var addEventBtn = document.querySelector("#addEvent");

// addEventBtn.addEventListener("click", () => {

// })

// Add Event End




// Edit User Start

// var addUserBtn = document.querySelector("#addUser");

// addUserBtn.addEventListener("click", () => {

// })

// Edit User End
// Edit Blog Start

// var addBlogBtn = document.querySelector("#addBlog");

// addBlogBtn.addEventListener("click", () => {

// })

// Edit Blog End
// Edit Event Start

// var addEventBtn = document.querySelector("#addEvent");

// addEventBtn.addEventListener("click", () => {

// })

// Add Event End


// Add End