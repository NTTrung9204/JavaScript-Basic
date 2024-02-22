var arr = ["Developer...    ","Learning JavaScript...    ","Being Human...    "];
var text = document.getElementById("text");
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