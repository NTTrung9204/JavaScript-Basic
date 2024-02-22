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
            if(document.body.scrollTop > 500 + 360*i){
                CTimeLineLeft[i].style.left = `50%`;
            }
        }
        for(let i=0;i<CTimeLineRight.length;i++){
            if(document.body.scrollTop > 750 + 360*i){
                CTimeLineRight[i].style.right = `50%`;
            }
        }
    })
}

function Contact(){
    var contact = document.getElementsByClassName("contact")[0];
    contact.addEventListener("click",()=>{
        document.getElementsByClassName("social-icons")[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })
}

var arr = ["Developer...    ","Learning JavaScript...    ","Being Human...    "];
var text = document.getElementsByClassName("describe")[0];
var index = 0;
var i=0;
var out = ""
var check = 0;
function print(phase,k,m){
    if(index>0 || m == 0){
        if(index==phase[k].length){
            check=1;
        }
        if(check==0){
            out += phase[k][index];
            text.innerHTML = out;
            index += 1;
            setTimeout(print,100,phase,i,check);
        }
        if(check==1){
            index-=1;
            out = out.slice(0,index);
            text.innerHTML = out;
            setTimeout(print,100,phase,i,check);
        }
    }
    else{
        if(i<phase.length-1){
            i++;
            index = 0;
            check=0;
            out = "";
            print(phase,i,check);
        }
        else{
            i=0;
            index=0;
            check=0;
            out="";
            print(phase,i,check);
        }
    }
}

print(arr,i,check);

timeLine()
Contact()