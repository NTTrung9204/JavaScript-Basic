var list = document.getElementsByClassName("nav__item");
var text = document.getElementsByClassName("text");
var circle = document.getElementsByClassName("circle")[0];
circle.style.transition= "all 0.2s linear";
console.log(list)
for(let i=0;i<list.length;i++){
    list[i].onclick = function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove("active");
            text[j].classList.remove("activeText");
        }
        list[i].classList.add("active");
        circle.style.transform=`translate(${10+94*i}px,-45px)`;
        text[i].classList.add("activeText");
        
    }
}