a = "";
b = "";
k = "";
result = "";
o = "";

function reset(){
    for(let i=0;i<4;i++){
        document.getElementsByClassName("toantu")[i].style.border = "";
    }
}

function g(){
    switch(o){
        case "+":
            result = Number(a)+Number(b);
            break;
        case "-":
            result = Number(a)-Number(b);
            break;
        case "*":
            result = Number(a)*Number(b);
            break;
        case "/":
            if(b==0){
                result = "Math Error!";
            }
            else {
                result = Number(a)/Number(b);
            }
            break;
    }
    document.getElementsByClassName("input")[0].value = result;
    o = "";
    a = result;
    b = "";
    k = 1;
    reset();
}

function f1(){
    if(k==0){
        a+=document.getElementsByClassName("so")[0].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[0].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
    console.log(a);
}

function f2(){
    if(k==0){
        a+=document.getElementsByClassName("so")[1].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[1].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
        console.log(b);
    }
}

function f3(){
    if(k==0){
        a+=document.getElementsByClassName("so")[2].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[2].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f4(){
    if(k==0){
        a+=document.getElementsByClassName("so")[3].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[3].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f5(){
    if(k==0){
        a+=document.getElementsByClassName("so")[4].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[4].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f6(){
    if(k==0){
        a+=document.getElementsByClassName("so")[5].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[5].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f7(){
    if(k==0){
        a+=document.getElementsByClassName("so")[6].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[6].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f8(){
    if(k==0){
        a+=document.getElementsByClassName("so")[7].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[7].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f9(){
    if(k==0){
        a+=document.getElementsByClassName("so")[8].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[8].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f0(){
    if(k==0){
        a+=document.getElementsByClassName("so")[9].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[9].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f10(){
    if(k==0){
        a+=document.getElementsByClassName("so")[10].innerHTML;
        document.getElementsByClassName("input")[0].value = a;
    }
    else{
        b+=document.getElementsByClassName("so")[10].innerHTML;
        document.getElementsByClassName("input")[0].value = b;
    }
}

function f11(){
    document.getElementsByClassName("input")[0].value = "";
    a = "";
    b = "";
    k = 0;
    reset();
}

function h1(){
    o = "+";
    k = 1;
    reset();
    document.getElementsByClassName("toantu")[0].style.border = "2px solid #4D90FE";
}

function h2(){
    o = "-";
    k = 1;
    reset();
    document.getElementsByClassName("toantu")[1].style.border = "2px solid #4D90FE";
}

function h3(){
    o = "*";
    k = 1;
    reset();
    document.getElementsByClassName("toantu")[2].style.border = "2px solid #4D90FE";
}

function h4(){
    o = "/";
    k = 1;
    reset();
    document.getElementsByClassName("toantu")[3].style.border = "2px solid #4D90FE";
}