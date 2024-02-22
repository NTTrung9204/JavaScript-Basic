function timeLine(){
    var CTimeLineRight = document.getElementsByClassName("component--right");
    var CTimeLineLeft = document.getElementsByClassName("component--left");
    for(let i=0;i<CTimeLineLeft.length;i++){
        CTimeLineLeft[i].style.top = `calc(70px + ${180*2*i}px)`;
    }
    for(let i=0;i<CTimeLineRight.length;i++){
        CTimeLineRight[i].style.top = `calc(250px + ${180*2*i}px)`;
    }
    window.addEventListener("scroll",()=>{
        for(let i=0;i<CTimeLineLeft.length;i++){
            if(document.body.scrollTop > -50 + 360*i){
                CTimeLineLeft[i].style.left = `50%`;
            }
        }
        for(let i=0;i<CTimeLineRight.length;i++){
            if(document.body.scrollTop > -250 + 360*i){
                CTimeLineRight[i].style.right = `50%`;
            }
        }
    })
}

timeLine()