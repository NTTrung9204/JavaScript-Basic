var buttonContent = document.getElementsByClassName('content__main-button');

var contentMain = document.getElementsByClassName('content__main-desc');
function activeContentMain(index){
    contentMain[index].classList.add('content__main-active');
}
for( let i = 0 ; i < buttonContent.length ; i++ ){
    buttonContent[i].addEventListener('click', ()=>{
        activeContentMain(i)
        buttonContent[i].style.display = "none"; 
    } )
}