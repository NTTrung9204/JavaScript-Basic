function f(){
    a = setInterval(g, 3000);
}

function g(){
    console.log(1)
    document.getElementsByClassName("notice")[0].remove();
    clearInterval(a);
}

function run(){
    mess = document.createElement("div");
    mess.classList.add("notice");
    document.body.appendChild(mess);
    mess.innerHTML =
    `
        <ion-icon class="icon_check" name="checkmark-circle"></ion-icon>
        <div class="mess">
            <p class="title">Chúc mừng!</p>
            <p class="content">Bạn đã trở thành fan cứng của Chun</p>
        </div>
        <ion-icon class="icon_close" name="close-circle"></ion-icon>
    `
    f();
}
