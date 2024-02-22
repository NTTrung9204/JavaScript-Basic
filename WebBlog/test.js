var mode = document.getElementById("mode");
var change = document.getElementsByClassName("sidebar__left__theme")[0];
var Open = document.getElementsByClassName("post__content__text__open");
var content = document.getElementsByClassName("post__content__text");
var icon = document.getElementsByClassName("fa-moon")[0];
var mode__text = document.getElementById("mode__text");
var sidebar__list = document.getElementsByClassName("sidebar__left__contain__item");
var main__post = document.getElementsByClassName("main__post");
var main__post__active = document.getElementsByClassName("main__post main__post__active");
var new__post = document.getElementsByClassName("sidebar__right__contain__item");
var heart = document.getElementsByClassName("post__infor__favorite");



for (let i = 0; i < heart.length; i++) {
    heart[i].addEventListener("click", () => {
        heart[i].classList.toggle("post__infor__favorite__active");
        updateImportant()
    })
}


mode.addEventListener("click", () => {
    var light = "#FEE4F8";
    var dark = "#624772";
    mode.classList.toggle("mode__moon");
    if (mode.classList.length == 1) {
        var dark = "#FEE4F8";
        var light = "#624772";
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        mode__text.innerHTML = "Dark Mode";
    }
    else {
        mode__text.innerHTML = "Light Mode";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    changeBackground(light,"sidebar__left","navbar","sidebar__left__line__text","sidebar__right","post","post__title__text");
    changeBackground(dark,"post__title","sidebar__left__line");
    document.body.style.color = dark;
})

function changeBackground(Color, ...args){
    for(let arg of args){
        var element = document.getElementsByClassName(arg);
        for(let i=0;i<element.length;i++){
            element[i].style.backgroundColor = Color;
        }
    }
}

for (let i = 0; i < Open.length; i++) {
    Open[i].addEventListener("click", function () {
        content[i].classList.toggle("post__content__text__active");
        if (content[i].classList.length == 2) {
            Open[i].innerHTML = "Ẩn bớt";
        }
        else {
            Open[i].innerHTML = "Xem thêm";
        }
    })
}

for (let i = 0; i < sidebar__list.length; i++) {
    sidebar__list[i].addEventListener("click", () => {
        updateTittle(i);
    })
}

function Scroll(i) {
    document.getElementById(i).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

function updateImportant() {
    for (let j = 0; j < new__post.length - 5; j++) {
        new__post[j].innerHTML = "";
    }
    let temp = 0;
    for (let j = 0; j < new__post.length - 5; j++) {
        for (let k = temp; k < main__post__active[0].children.length; k++) {
            if (main__post__active[0].children[k].getElementsByClassName("post__infor__favorite__active").length) {
                new__post[j].innerHTML =
                    `<i class="fas fa-burn"></i>
                    ${main__post__active[0].children[k].childNodes[1].innerText}`
                temp = k + 1;
                console.log(k, temp);
                new__post[j].addEventListener("click", () => {
                    Scroll(k);
                });
                break;
            }
        }
    }
    for (let j = 0; j < new__post.length; j++) {
        if (!new__post[j].innerHTML) {
            new__post[j].style.visibility = "hidden";
        }
        else {
            new__post[j].style.visibility = "visible";
        }

    }
}

function updateTittle(i) {
    for (let j = 0; j < sidebar__list.length; j++) {
        main__post[j].classList.remove("main__post__active");
        sidebar__list[j].classList.remove("sidebar__left__contain__item__active");
    }
    for (let j = 0; j < main__post.length; j++) {
        for (let k = 0; k < main__post[j].children.length; k++) {
            main__post[j].children[k].id = "";
        }
    }
    sidebar__list[i].classList.add("sidebar__left__contain__item__active");
    main__post[i].classList.add("main__post__active");
    for (let j = 0; j < new__post.length; j++) {
        new__post[j].innerHTML = "";
    }
    for (let j = 5; j < new__post.length; j++) {
        if (j - 5 < main__post__active[0].children.length) {
            new__post[j].innerHTML =
                `<i class="fas fa-lightbulb"></i>
            ${main__post__active[0].children[j - 5].childNodes[1].innerText}`
            main__post__active[0].children[j - 5].id = j - 5;
            new__post[j].addEventListener("click", () => {
                Scroll(j - 5);
            });
        }
    }
    updateImportant()
    for (let j = 0; j < new__post.length; j++) {
        if (!new__post[j].innerHTML) {
            new__post[j].style.visibility = "hidden";
        }
        else {
            new__post[j].style.visibility = "visible";
        }

    }
}



updateTittle(0);
