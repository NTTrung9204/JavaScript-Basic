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

var buttonReply = document.getElementsByClassName('comment__user-btn');

var elementReply = document.getElementsByClassName('comment__text-reply');

for ( let i = 0; i < buttonReply.length; i++ )   {
    buttonReply[i].addEventListener('click',()=> {
        console.log[i];
        elementReply[i].style.display = "block";
    })
}