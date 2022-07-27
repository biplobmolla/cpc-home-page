// Navigation For Mobile Device Start


var navMenuIcon = document.querySelector(".nav__menu__icon");
var navMenuCloseIcon = document.querySelector(".nav__menu__close__icon");
var menu = document.querySelector(".menu");

navMenuIcon.addEventListener("click", () => {
    menu.style.right = "0";
});

navMenuCloseIcon.addEventListener("click", () => {
    menu.style.right = "-200%";
});

// Navigation For Mobile Device End

// Select For Team and Certificate Start

var selecListShowBtn = document.querySelector(".selected__value .fa-sort-down");
var selecListShowBtn2 = document.querySelector(".selected__value__2 .fa-sort-down");
var selectCloseBtn = document.querySelector(".select__menu__close__btn");
var selectCloseBtn2 = document.querySelector(".select__menu__close__btn__2");
var selectMenuList = document.querySelector(".pop__up__menu");
var selectMenuList2 = document.querySelector(".pop__up__menu__2");
var selectMenuListItem = document.querySelectorAll(".pop__up__menu li");
var selectMenuListItem2 = document.querySelectorAll(".pop__up__menu__2 li");
var selectedValueInput = document.querySelector(".selected__value input");
var selectedValueInput2 = document.querySelector(".selected__value__2 input");

// for (let i = 0; i < 2; i++) {
if (selecListShowBtn) {
    selecListShowBtn.addEventListener("click", () => {
        selectMenuList.style = "display: block; opacity: 1; transform: translateY(0);";
    });
}
if (selecListShowBtn2 != null) {
    selecListShowBtn2.addEventListener("click", () => {
        selectMenuList2.style = "display: block; opacity: 1; transform: translateY(0);";
    });
}

if (selectCloseBtn) {
    selectCloseBtn.addEventListener("click", () => {
        selectMenuList.style = "opacity: 0; transform: translateY(-50%); display: none;";
    });
}
if (selectCloseBtn2 != null) {
    selectCloseBtn2.addEventListener("click", () => {
        selectMenuList2.style = "opacity: 0; transform: translateY(-50%); display: none;";
    });
}
// }
for (let j = 0; j < selectMenuListItem.length; j++) {
    selectMenuListItem[j].addEventListener("click", () => {
        selectedValueInput.value = selectMenuListItem[j].innerText;
        selectMenuList.style = "display: none !important;";
        document.querySelector(".selected__value__2").style = "display: flex !important;";
        selectMenuList.style = "opacity: 0; transform: translateY(-50%); display: none;";
    });
}

for (let k = 0; k < selectMenuListItem2.length; k++) {
    selectMenuListItem2[k].addEventListener("click", () => {
        selectedValueInput2.value = selectMenuListItem2[k].innerText;
        document.querySelector(".selected__value__2").style = "display: flex !important;";
        selectMenuList2.style = "opacity: 0; transform: translateY(-50%); display: none;";
    });
}

// Select For Team and Certificate End

// Team Member Start

var previusBtn = document.querySelector(".previus");
var presentBtn = document.querySelector(".present");
var pagination = document.querySelector(".pagination");

if (previusBtn != null) {
    previusBtn.addEventListener("click", () => {
        var tmpPrevStatus = previusBtn.innerText;
        var tmpPresentStatus = presentBtn.innerText;
        var tmpPrevNum = tmpPrevStatus.split(" ");
        var finalPrevNum = tmpPrevNum[1] - 1;
        previusBtn.innerText = `TEAM ${finalPrevNum}`;
        presentBtn.innerText = tmpPrevStatus;

        //     // "<li class='next'><span>TEAM 2022</span></li><li><i class='arrow fa - solid fa - caret - right'></i></li>";

        if (document.querySelector(".next") === null) {
            var nextElement = document.createElement("li");
            nextElement.classList.add("next");
            nextElement.setAttribute("onclick", "nextClicked()");
            var insideNextElement = document.createElement("span");
            insideNextElement.innerText = "TEAM 2022";
            nextElement.appendChild(insideNextElement);
            var nextElement2 = document.createElement("li");
            var insideNextElement2 = document.createElement("i");
            insideNextElement2.classList.add("arrow", "fa-solid", "fa-caret-right");
            nextElement2.appendChild(insideNextElement2);
            var documentFrag = document.createDocumentFragment();
            documentFrag.appendChild(nextElement);
            documentFrag.appendChild(nextElement2);
            pagination.appendChild(documentFrag);
        } else {
            var nextBtn = document.querySelector(".next");
            nextBtn.innerText = tmpPresentStatus;
        }
    });
}

function nextClicked() {
    var d = new Date();
    var year = d.getFullYear();

    var nextBtn = document.querySelector(".next");
    var tmpNextStatus = nextBtn.innerText;
    var tmpPresentStatus = presentBtn.innerText;
    var tmpNextNum = tmpNextStatus.split(" ");

    if (year > tmpNextNum[1]) {
        var finalNextNum = Math.floor(tmpNextNum[1]) + 1;
        nextBtn.innerText = `TEAM ${finalNextNum}`;
        presentBtn.innerText = tmpNextStatus;
        previusBtn.innerText = tmpPresentStatus;
    } else {
        presentBtn.innerText = tmpNextStatus;
        previusBtn.innerText = tmpPresentStatus;
        document.querySelector(".next").remove();
        document.querySelector(".pagination li .fa-caret-right").remove();
    }
}

var stuIdInput = document.querySelector(".input__student__id input");

if (stuIdInput) {
    stuIdInput.addEventListener("keypress", (e) => {
        var val = e.target.value;
        if ((val.length == 3)) {
            val += "-";
            stuIdInput.value = val;
        } else if (val.length == 6) {
            val += "-";
            stuIdInput.value = val;
        }
    });
}

// Team Member End
