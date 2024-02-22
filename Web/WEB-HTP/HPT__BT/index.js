// var buttonContent = document.getElementsByClassName('content__main-button');

// var contentMain = document.getElementsByClassName('content__main-desc');
// function activeContentMain(index){
//     contentMain[index].classList.add('content__main-active');
// }
// for( let i = 0 ; i < buttonContent.length ; i++ ){
//     buttonContent[i].addEventListener('click', ()=>{
//         activeContentMain(i)
//         buttonContent[i].style.display = "none"; 
//     } )
// }

// var topResult = document.getElementsByClassName('top__list');

// var topValue = document.getElementsByClassName('top__value');

// for( let i = 0 ; i < topResult.length ; i++ ){
//     topResult[i].addEventListener('scroll',() => {
//         const scrollTop = topResult[i].scrollTop;
//         const scrollHeight = topResult[i].scrollHeight;
//         const clientHeight = topResult[i].clientHeight;
//         const percentage = Math.floor(scrollTop / (scrollHeight - clientHeight) * 96);
//         topValue[i].style.width = percentage + '%';
//     })
// }



// var navbarBodyitem = document.getElementsByClassName('navbarBody__item');

// var btnDown = document.querySelector('.navbarBody');

// var isScrolling = false;

// btnDown.addEventListener('scroll',() => {
//     if(!isScrolling){
//         for(let i = 0 ; i < navbarBodyitem.length ; i++){
//             var check = navbarBodyitem[i].classList.contains('dp-b');
//             if(check)   {
//                 for(let k = i ; k < navbarBodyitem.length ; k++){
//                     var test = navbarBodyitem[k].classList.contains('dp-n');
//                     if(test){
//                         navbarBodyitem[k].classList.add('dp-b');
//                         navbarBodyitem[k].classList.remove('dp-n');
//                         navbarBodyitem[k-6].classList.add('dp-n');
//                         navbarBodyitem[k-6].classList.remove('dp-b');
//                         break;
//                     } 
//                 }
//                 break;
//             }
//         }
//         isScrolling = true;

//         setTimeout(function() {
//             isScrolling = false;
//           }, 500);
//     }
// }) 

// btnUp.addEventListener('scroll',function() {
//     for(let i = 0 ; i < navbarBodyitem.length ; i++){
//         var check = navbarBodyitem[i].classList.contains('dp-b');
//         if(check && i != 0)   {
//             navbarBodyitem[i-1].classList.add('dp-b');
//             navbarBodyitem[i-1].classList.remove('dp-n');
//             navbarBodyitem[i+5].classList.add('dp-n');
//             navbarBodyitem[i+5].classList.remove('dp-b');
//             break;
//         }
//     }
// })







