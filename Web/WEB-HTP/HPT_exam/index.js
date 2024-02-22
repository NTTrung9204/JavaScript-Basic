var elementListitem = document.getElementsByClassName('fas');

var elementTable = document.getElementsByClassName('table');

for( let i = 0; i < elementListitem.length; i++){
    elementListitem[i].addEventListener('click',function(){
        console.log(i);
        elementTable[i].classList.toggle('dp-n');
    })
}