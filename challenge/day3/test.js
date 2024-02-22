var modal = document.getElementsByClassName("modal")[0];
var show = document.getElementsByClassName("show")[0];
var Blur = document.getElementsByClassName("blur")[0];
var icon = document.getElementsByClassName("model__icon")[0];
var Close = document.getElementsByClassName("modal__close")[0];
function closeModal(){
    modal.style.top = "-100%";
    modal.style.transform = "translate(-50%,0)";
    Blur.style.display = "none";
}

show.addEventListener("click", function (){
    modal.style.top = "50%";
    modal.style.transform = "translate(-50%,-50%)";
    Blur.style.display = "block";
})
Blur.addEventListener("click", closeModal);
icon.addEventListener("click", closeModal);
Close.addEventListener("click", closeModal);

