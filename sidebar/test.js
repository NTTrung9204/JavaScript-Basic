var item = document.getElementsByClassName("nav__item__item");
var icon = document.getElementById("icon");
var sidebar = document.getElementById("sidebar");
for(let i=0;i<item.length;i++){
    item[i].onclick=function(){
        for(let j=0;j<item.length;j++){
            item[j].classList.remove("active");
        }
        item[i].classList.add("active");
    }
}

icon.onclick = function(){
    sidebar.style.left = '0'
}