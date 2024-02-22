var chessA = document.getElementsByClassName("chessA");
var chessB = document.getElementsByClassName("chessB");
var colorMove = "rgba(255, 0, 0, 0.4)"
var a = []
var posA = []
var posB = []
function item(){
    var j = 0;
    for(let i=0;i<64;i++){
        var newItem = document.createElement("div");
        newItem.className = "board__item";
        if(i%8==0) j=(j+1)%2;
        if(i%2 == j) newItem.style.backgroundColor = "#769656";
        document.getElementsByClassName("board")[0].appendChild(newItem);
    }
    var j = 0;
    for(let i=0;i<64;i++){
        var newItem = document.createElement("div");
        newItem.className = "board__item";
        if(i%8==0) j=(j+1)%2;
        if(i%2 == j) newItem.style.backgroundColor = "#769656";
        document.getElementsByClassName("board")[1].appendChild(newItem);
    }
}

function setColor(){
    var item = document.getElementsByClassName("board__item");
    var j = 0;
    for(let i=0;i<64;i++){
        item[i].style.backgroundColor = "#6b6b00";
        if(i%8==0) j=(j+1)%2;
        if(i%2 == j) item[i].style.backgroundColor = "#769656";
    }
}

function pos(){
    var item = document.getElementsByClassName("board__item");
    for(let i=0;i<64;i++){
        item[i].addEventListener("click",()=>{
            setColor()
            for(let j=0;j<16;j++){
                if(chessB[j].style.color == "red"){
                    trans(chessB[j],Math.floor(i%8),Math.floor(i/8),1)
                    posB[j] = i
                    break
                }
                if(chessA[j].style.color == "yellow"){
                    trans(chessA[j],Math.floor(i%8),Math.floor(i/8),0)
                    posA[j] = i
                    break
                }
            }
            // console.log(Math.floor(i%8),Math.floor(i/8));
            // return [i%8,i/8]
        })
    }
}



function selectA(index){
    setColor()
    var key = 0
    var pos_x = parseInt(chessA[index].style.left)/50
    var pos_y = parseInt(chessA[index].style.top)/50
    for(let j=0;j<16;j++){
        if(chessB[j].style.color == "red"){
            trans(chessB[j],pos_x,pos_y,1)
            posB[j] = pos_x + 8*pos_y
            chessA[index].style.top = -150 + Math.floor(index/8)*50
            chessA[index].style.left = index%8*50
            posA[index] = -1
            key = 1;
            break;
        }
    }
    if(key==0){
        // console.log('key')
        for(let k=0;k<16;k++){
            chessA[k].style.color = "black"
        }
        chessA[index].style.color = "yellow"
        if(pos_x >= 0 && pos_x < 8 && pos_y >= 0 && pos_y < 8){
            // console.log('key')
            moveA(index,index)
        }
    }
    // console.log(pos_x,pos_y)
}

function selectB(index){
    setColor()
    var key = 0
    var pos_x = parseInt(chessB[index].style.left)/50
    var pos_y = parseInt(chessB[index].style.top)/50
    for(let j=0;j<16;j++){
        if(chessA[j].style.color == "yellow"){
            trans(chessA[j],pos_x,pos_y,0)
            posA[j] = pos_x+8*pos_y
            chessB[index].style.top = 500 - Math.floor(index/8)*50
            chessB[index].style.left = index%8*50
            posB[index] = -1
            key = 1;
            break;
        }
    }
    if(key==0){
        for(let k=0;k<16;k++){
            chessB[k].style.color = "73ff00"
        }
        chessB[index].style.color = "red"
        if(pos_x >= 0 && pos_x < 8 && pos_y >= 0 && pos_y < 8){
            //console.log(index)
            moveB(index,index)
        }
    }
}

function runB(index){
    item = document.getElementsByClassName("board__item");
    var arr_x = []
    var arr_y = []
    for(let i=0;i<64;i++){
        if(item[i].style.backgroundColor == colorMove){
            var pos_x = Math.floor(i%8)
            var pos_y = Math.floor(i/8)
            arr_x.push(pos_x)
            arr_y.push(pos_y)
        }
    }
    var next = Math.floor(Math.random()*arr_x.length)
    trans(chessB[index],arr_x[next],arr_y[next],1)
    posB[index] = arr_x[next] + 8*arr_y[next]
    for(let j=0;j<16;j++){
        if(arr_x[next] == parseInt(chessA[j].style.left)/50 && arr_y[next] == parseInt(chessA[j].style.top)/50){
            chessA[j].style.top = -150 + Math.floor(j/8)*50
            chessA[j].style.left = j%8*50
            break
        }
    }
    setColor()
}

function runA(index){
    item = document.getElementsByClassName("board__item");
    var arr_x = []
    var arr_y = []
    for(let i=0;i<64;i++){
        if(item[i].style.backgroundColor == colorMove){
            var pos_x = Math.floor(i%8)
            var pos_y = Math.floor(i/8)
            arr_x.push(pos_x)
            arr_y.push(pos_y)
        }
    }
    var next = Math.floor(Math.random()*arr_x.length)
    trans(chessA[index],arr_x[next],arr_y[next],0)
    posA[index] = arr_x[next] + 8*arr_y[next]
    for(let j=0;j<16;j++){
        if(arr_x[next] == parseInt(chessB[j].style.left)/50 && arr_y[next] == parseInt(chessB[j].style.top)/50){
            chessB[j].style.top = 500 - Math.floor(j/8)*50
            chessB[j].style.left = j%8*50
            break
        }
    }
    setColor()
}

function chess(){
    for(let i=0;i<16;i++){
        var pos_x = i*50;
        var pos_y = 0;
        if(pos_x>=400) {
            pos_x = pos_x - 400;
            pos_y = 50
        }
        chessA[i].style.left = pos_x
        chessA[i].style.top = pos_y
        chessA[i].addEventListener("click",()=>{
            selectA(i)
        })
    }
    for(let i=0;i<16;i++){
        var pos_x = i*50;
        var pos_y = 350;
        if(pos_x>=400) {
            pos_x = pos_x - 400;
            pos_y = 300
        }
        chessB[i].style.left = pos_x
        chessB[i].style.top = pos_y
        chessB[i].addEventListener("click",()=>{
            selectB(i)
            //console.log(parseInt(chessB[i].style.left)/50,parseInt(chessB[i].style.top)/50)
        })
    }
}

function chooseNext(element, key){
    var arr = []
    var item = document.getElementsByClassName("board__item");
    for(let i=0;i<16;i++){
        var pos_x = parseInt(element[i].style.left)/50
        var pos_y = parseInt(element[i].style.top)/50
        if(pos_x >= 0 && pos_x < 8 && pos_y >= 0 && pos_y < 8){
            //console.log('pos',pos_x,pos_y)
            if(key==0){
                selectA(i)
            }
            else{
                selectB(i)
            }
            for(let j=0;j<64;j++){
                // console.log(i,j)
                if(item[j].style.backgroundColor == colorMove){
                    arr.push(i)
                    setColor()
                    break
                }
            }
        }
    }
    //console.log(arr)
    var next = arr[Math.floor(Math.random()*arr.length)]
    return next
}

function init(){
    for(let i=0;i<64;i++){
        a.push(0)
    }
    for(let i=0;i<16;i++){
        posA.push(i)
        posB.push(0)
    }

    posB[0] = 56;posB[1] = 57;posB[2] = 58;posB[3] = 59;posB[4] = 60;posB[5] = 61;posB[6] = 62;posB[7] = 63;posB[8] = 48;posB[9] = 49;posB[10] = 50;posB[11] = 51;posB[12] = 52;posB[13] = 53;posB[14] = 54;posB[15] = 55;

    a[0] = 50;a[1] = 30;a[2] = 30;a[3] = 90;a[4] = 900;a[5] = 30;a[6] = 30;a[7] = 50;a[8] = 10;a[9] = 10;a[10] = 10;a[11] = 10;a[12] = 10;a[13] = 10;a[14] = 10;a[15] = 10;

    a[48] = -10;a[49] = -10;a[50] = -10;a[52] = -10;a[51] = -10;a[53] = -10;a[54] = -10;a[55] = -10;a[56] = -50;a[57] = -30;a[58] = -30;a[59] = -90;a[60] = -900;a[61] = -30;a[62] = -30;a[63] = -50;

}

function valueCal(arr,posA,posB){
    var sum = 0;
    var totalA = []
    var totalB = []
    for(let i=0;i<16;i++) if(posB[i]!=-1) {
        totalA.push(i)
        sum+=Number(arr[posB[i]])
    };
    for(let i=0;i<16;i++) if(posA[i]!=-1) {
        totalB.push(i)
        sum+=Number(arr[posA[i]])
    };
    if(totalA.length+totalB.length<=14){
        for(var k=0;k<totalA.length;k++){
            if(totalA[k]<8){
                var x=posA[totalA[k]]%8
                var y=Math.floor(posA[totalA[k]]/8)
                var distance = Math.abs(posB[4]%8-x) + Math.abs(Math.floor(posB[4]/8)-y)
                if(totalA[k]==0 || totalA[k]==7) sum+=(20-distance+14)/16
                if(totalA[k]==1 || totalA[k]==6) sum+=(20-distance+1)/16
                if(totalA[k]==2 || totalA[k]==5) sum+=(20-distance+7)/16
                if(totalA[k]==3) sum+=(20-distance+35)/16
                if(totalA[k]==3 && x<=5 && x>=2 && y>=2 && y<=5){
                    sum+=1
                    if(x<=4 && x>=3 && y>=3 && y<=4){
                        sum+=1
                    }
                }
                if(totalA[k]==4) sum+=(20-distance*3+30)/16
            }
        }
    }
    if(totalA.length+totalB.length<=14){
        for(var k=0;k<totalB.length;k++){
            if(totalB[k]<8){
                var distance = Math.abs(posA[4]%8-posB[totalB[k]]%8) + Math.abs(Math.floor(posA[4]/8)-Math.floor(posB[totalB[k]]/8))
                if(totalB[k]==0 || totalB[k]==7) sum-=(20+distance+14)/16
                if(totalB[k]==1 || totalB[k]==6) sum-=(20+distance+1)/16
                if(totalB[k]==2 || totalB[k]==5) sum-=(20+distance+7)/16
                if(totalB[k]==3) sum-=(20+distance+35)/16
                if(totalB[k]==4) sum-=(20+distance*3+30)/16
            }
        }
    }
    return sum
}

init()

function trans(element, pos_x, pos_y, key){
    var x = parseInt(element.style.left)/50
    var y = parseInt(element.style.top)/50
    //console.log('x,y',x,y)
    a[x+8*y] = 0
    if(key==0){
        a[pos_x+8*pos_y] = Number(element.getAttribute("data-value"))
    }
    else{
        a[pos_x+8*pos_y] = -element.getAttribute("data-value")
    }
    // console.log(a)
    // console.log(valueCal())
    element.style.left = pos_x*50
    element.style.top = pos_y*50
    if(key==0) element.style.color = "black"
    else element.style.color = "73ff00"
    if(element.getAttribute("data-value") == 10 && pos_y == 0 && key == 1){
        element.setAttribute("data-value","90")
        element.innerHTML = "♕"
        a[pos_x+8*pos_y] = -90
    }
    if(element.getAttribute("data-value") == 10 && pos_y == 7 && key == 0){
        element.setAttribute("data-value","90")
        element.innerHTML = "♕"
        a[pos_x+8*pos_y] = 90
    }
}






















var dem = 0

function moveB(index, outdex){
    var item = document.getElementsByClassName("board__item");
    var pos_x = parseInt(chessB[outdex].style.left)/50
    var pos_y = parseInt(chessB[outdex].style.top)/50
    var value = chessB[index].getAttribute("data-value")
    
    // Luật di chuyển Tốt B
    if(value == 10){
        if(pos_y == 6){
            if(a[pos_x+8*(pos_y-2)]==0 && a[pos_x+8*(pos_y-1)]==0) item[pos_x+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_y-1>=0){
            if(a[pos_x+8*(pos_y-1)]==0) item[pos_x+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y-1>=0){
            if(a[pos_x-1+8*(pos_y-1)]>0) item[pos_x-1+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y-1>=0){
            if(a[pos_x+1+8*(pos_y-1)]>0) item[pos_x+1+8*(pos_y-1)].style.backgroundColor = colorMove

        }
    }

    // Luật di chuyển Xe B
    if(value == 50){
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]<0) break
            if(a[pos_x-pos+8*pos_y]>0){
                item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
                break
            }
            item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]<0) break
            if(a[pos_x+pos+8*pos_y]>0){
                item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
                break
            }
            item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]<0) break
            if(a[pos_x+8*(pos_y+pos)]>0){
                item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]<0) break
            if(a[pos_x+8*(pos_y-pos)]>0){
                item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
            pos++;
        }
    }

    // Luật di chuyển Mã B
    if(value == 30 && index == 1 || index == 6){
        if(pos_x+2<8 && pos_y+1<8){
            if(a[pos_x+2+8*(pos_y+1)]>=0) item[pos_x+2+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x+2<8 && pos_y-1>=0){
            if(a[pos_x+2+8*(pos_y-1)]>=0) item[pos_x+2+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-2>=0 && pos_y+1<8){
            if(a[pos_x-2+8*(pos_y+1)]>=0) item[pos_x-2+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            if(a[pos_x-2+8*(pos_y-1)]>=0) item[pos_x-2+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            if(a[pos_x-1+8*(pos_y-2)]>=0) item[pos_x-1+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y+2<8){
            if(a[pos_x-1+8*(pos_y+2)]>=0) item[pos_x-1+8*(pos_y+2)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y-2>=0){
            if(a[pos_x+1+8*(pos_y-2)]>=0) item[pos_x+1+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y+2<8){
            if(a[pos_x+1+8*(pos_y+2)]>=0) item[pos_x+1+8*(pos_y+2)].style.backgroundColor = colorMove
        }
    }

    // Luật di chuyển Tượng B
    if(value == 30 && index == 2 || index == 5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]<0) break
            if(a[pos_x-x+8*(pos_y-y)]>0) {
                item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]<0) break
            if(a[pos_x+x+8*(pos_y+y)]>0) {
                item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]<0) break
            if(a[pos_x+x+8*(pos_y-y)]>0) {
                item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]<0) break
            if(a[pos_x-x+8*(pos_y+y)]>0) {
                item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
    }

    // Luật di chuyển Hậu B
    if(value == 90){
        
        moveB(0,outdex)
        moveB(2,outdex)
    }

    // Luật di chuyển Vua B
    if(value == 900){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    if(a[pos_x+i+8*(pos_y+j)]>=0) item[pos_x+i+8*(pos_y+j)].style.backgroundColor = colorMove
                }
            }
        }
    }
}

function moveA(index, outdex){
    var item = document.getElementsByClassName("board__item");
    var pos_x = parseInt(chessA[outdex].style.left)/50
    var pos_y = parseInt(chessA[outdex].style.top)/50
    var value = chessA[index].getAttribute("data-value")
    
    // Luật di chuyển Tốt A
    if(value == 10){
        if(pos_y == 1){
            if(a[pos_x+8*(pos_y+2)]==0 && a[pos_x+8*(pos_y+1)]==0) item[pos_x+8*(pos_y+2)].style.backgroundColor = colorMove
        }
        if(pos_y+1<8){
            if(a[pos_x+8*(pos_y+1)]==0) item[pos_x+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y+1<8){
            if(a[pos_x-1+8*(pos_y+1)]<0) item[pos_x-1+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y+1<8){
            if(a[pos_x+1+8*(pos_y+1)]<0) item[pos_x+1+8*(pos_y+1)].style.backgroundColor = colorMove

        }
    }

    // Luật di chuyển Xe A
    if(value == 50){
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]>0) break
            if(a[pos_x-pos+8*pos_y]<0){
                item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
                break
            }
            item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]>0) break
            if(a[pos_x+pos+8*pos_y]<0){
                item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
                break
            }
            item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]>0) break
            if(a[pos_x+8*(pos_y+pos)]<0){
                item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]>0) break
            if(a[pos_x+8*(pos_y-pos)]<0){
                item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
            pos++;
        }
    }

    // Luật di chuyển Mã A
    if(value == 30 && index == 1 || index == 6){
        if(pos_x+2<8 && pos_y+1<8){
            if(a[pos_x+2+8*(pos_y+1)]<=0) item[pos_x+2+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x+2<8 && pos_y-1>=0){
            if(a[pos_x+2+8*(pos_y-1)]<=0) item[pos_x+2+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-2>=0 && pos_y+1<8){
            if(a[pos_x-2+8*(pos_y+1)]<=0) item[pos_x-2+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            if(a[pos_x-2+8*(pos_y-1)]<=0) item[pos_x-2+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            if(a[pos_x-1+8*(pos_y-2)]<=0) item[pos_x-1+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y+2<8){
            if(a[pos_x-1+8*(pos_y+2)]<=0) item[pos_x-1+8*(pos_y+2)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y-2>=0){
            if(a[pos_x+1+8*(pos_y-2)]<=0) item[pos_x+1+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y+2<8){
            if(a[pos_x+1+8*(pos_y+2)]<=0) item[pos_x+1+8*(pos_y+2)].style.backgroundColor = colorMove
        }
    }

    // Luật di chuyển Tượng A
    if(value == 30 && index == 2 || index == 5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]>0) break
            if(a[pos_x-x+8*(pos_y-y)]<0) {
                item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]>0) break
            if(a[pos_x+x+8*(pos_y+y)]<0) {
                item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]>0) break
            if(a[pos_x+x+8*(pos_y-y)]<0) {
                item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]>0) break
            if(a[pos_x-x+8*(pos_y+y)]<0) {
                item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
                break
            }
            item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
    }

    // Luật di chuyển Hậu A
    if(value == 90){
        
        moveA(0,outdex)
        moveA(2,outdex)
    }

    // Luật di chuyển Vua A
    if(value == 900){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    if(a[pos_x+i+8*(pos_y+j)]<=0) item[pos_x+i+8*(pos_y+j)].style.backgroundColor = colorMove
                }
            }
        }
    }
}

function validMoveA(index, outdex, a, posA){
    // var pos_x = parseInt(chessA[outdex].style.left)/50
    // var pos_y = parseInt(chessA[outdex].style.top)/50
    // var value = chessA[index].getAttribute("data-value")
    //console.log(posA)
    if (posA[outdex]==-1) return []
    var pos_x = posA[outdex]%8
    var pos_y = Math.floor(posA[outdex]/8)
    var value = Math.abs(a[posA[index]])
    var arr = []
    // Luật di chuyển Tốt A
    if(value == 10){
        if(pos_y == 1){
            if(a[pos_x+8*(pos_y+2)]==0 && a[pos_x+8*(pos_y+1)]==0) arr.push(pos_x+8*(pos_y+2))
        }
        if(pos_y+1<8){
            if(a[pos_x+8*(pos_y+1)]==0) arr.push(pos_x+8*(pos_y+1))
        }
        if(pos_x-1>=0 && pos_y+1<8){
            if(a[pos_x-1+8*(pos_y+1)]<0) arr.push(pos_x-1+8*(pos_y+1))
        }
        if(pos_x+1<8 && pos_y+1<8){
            if(a[pos_x+1+8*(pos_y+1)]<0) arr.push(pos_x+1+8*(pos_y+1))

        }
    }

    // Luật di chuyển Xe A
    if(value == 50){
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]>0) break
            if(a[pos_x-pos+8*pos_y]<0){
                arr.push(pos_x-pos+8*pos_y)
                break
            }
            arr.push(pos_x-pos+8*pos_y)
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]>0) break
            if(a[pos_x+pos+8*pos_y]<0){
                arr.push(pos_x+pos+8*pos_y)
                break
            }
            arr.push(pos_x+pos+8*pos_y)            
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]>0) break
            if(a[pos_x+8*(pos_y+pos)]<0){
                arr.push(pos_x+8*(pos_y+pos)) 
                break
            }
            arr.push(pos_x+8*(pos_y+pos))             
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]>0) break
            if(a[pos_x+8*(pos_y-pos)]<0){
                arr.push(pos_x+8*(pos_y-pos))                 
                break
            }
            arr.push(pos_x+8*(pos_y-pos)) 
            pos++;
        }
    }

    // Luật di chuyển Mã A
    if(value == 30 && index == 1 || index == 6){
        if(pos_x+2<8 && pos_y+1<8){
            if(a[pos_x+2+8*(pos_y+1)]<=0) arr.push(pos_x+2+8*(pos_y+1))
        }
        if(pos_x+2<8 && pos_y-1>=0){
            if(a[pos_x+2+8*(pos_y-1)]<=0) arr.push(pos_x+2+8*(pos_y-1))
        }
        if(pos_x-2>=0 && pos_y+1<8){
            if(a[pos_x-2+8*(pos_y+1)]<=0) arr.push(pos_x-2+8*(pos_y+1))
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            if(a[pos_x-2+8*(pos_y-1)]<=0) arr.push(pos_x-2+8*(pos_y-1))
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            if(a[pos_x-1+8*(pos_y-2)]<=0) arr.push(pos_x-1+8*(pos_y-2))
        }
        if(pos_x-1>=0 && pos_y+2<8){
            if(a[pos_x-1+8*(pos_y+2)]<=0) arr.push(pos_x-1+8*(pos_y+2))
        }
        if(pos_x+1<8 && pos_y-2>=0){
            if(a[pos_x+1+8*(pos_y-2)]<=0) arr.push(pos_x+1+8*(pos_y-2))
        }
        if(pos_x+1<8 && pos_y+2<8){
            if(a[pos_x+1+8*(pos_y+2)]<=0) arr.push(pos_x+1+8*(pos_y+2))
        }
    }

    // Luật di chuyển Tượng A
    if(value == 30 && index == 2 || index == 5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]>0) break
            if(a[pos_x-x+8*(pos_y-y)]<0) {
                arr.push(pos_x-x+8*(pos_y-y))
                break
            }
            arr.push(pos_x-x+8*(pos_y-y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]>0) break
            if(a[pos_x+x+8*(pos_y+y)]<0) {
                arr.push(pos_x+x+8*(pos_y+y))
                break
            }
            arr.push(pos_x+x+8*(pos_y+y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]>0) break
            if(a[pos_x+x+8*(pos_y-y)]<0) {
                arr.push(pos_x+x+8*(pos_y-y))  
                break
            }
            arr.push(pos_x+x+8*(pos_y-y)) 
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]>0) break
            if(a[pos_x-x+8*(pos_y+y)]<0) {
                arr.push(pos_x-x+8*(pos_y+y)) 
                break
            }
            arr.push(pos_x-x+8*(pos_y+y))             
            x++;y++
        }
        
    }

    // Luật di chuyển Hậu A
    if(value == 90){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]>0) break
            if(a[pos_x-x+8*(pos_y-y)]<0) {
                arr.push(pos_x-x+8*(pos_y-y))
                break
            }
            arr.push(pos_x-x+8*(pos_y-y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]>0) break
            if(a[pos_x+x+8*(pos_y+y)]<0) {
                arr.push(pos_x+x+8*(pos_y+y))
                break
            }
            arr.push(pos_x+x+8*(pos_y+y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]>0) break
            if(a[pos_x+x+8*(pos_y-y)]<0) {
                arr.push(pos_x+x+8*(pos_y-y))  
                break
            }
            arr.push(pos_x+x+8*(pos_y-y)) 
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]>0) break
            if(a[pos_x-x+8*(pos_y+y)]<0) {
                arr.push(pos_x-x+8*(pos_y+y)) 
                break
            }
            arr.push(pos_x-x+8*(pos_y+y))             
            x++;y++
        }
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]>0) break
            if(a[pos_x-pos+8*pos_y]<0){
                arr.push(pos_x-pos+8*pos_y)
                break
            }
            arr.push(pos_x-pos+8*pos_y)
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]>0) break
            if(a[pos_x+pos+8*pos_y]<0){
                arr.push(pos_x+pos+8*pos_y)
                break
            }
            arr.push(pos_x+pos+8*pos_y)            
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]>0) break
            if(a[pos_x+8*(pos_y+pos)]<0){
                arr.push(pos_x+8*(pos_y+pos)) 
                break
            }
            arr.push(pos_x+8*(pos_y+pos))             
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]>0) break
            if(a[pos_x+8*(pos_y-pos)]<0){
                arr.push(pos_x+8*(pos_y-pos))                 
                break
            }
            arr.push(pos_x+8*(pos_y-pos)) 
            pos++;
        }
        //return validMoveA(0,outdex,a,posA).concat(validMoveA(2,outdex,a,posA))
        //validMove(0,outdex)
        //validMove(2,outdex)
    }

    // Luật di chuyển Vua A
    if(value == 900){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    if(a[pos_x+i+8*(pos_y+j)]<=0) arr.push(pos_x+i+8*(pos_y+j))
                }
            }
        }
    }

    return arr
}

function validMoveB(index, outdex, a, posB){
    if (posB[outdex]==-1) return []
    var pos_x = posB[outdex]%8
    var pos_y = Math.floor(posB[outdex]/8)
    var value = Math.abs(a[posB[index]])
    // var pos_x = parseInt(chessB[outdex].style.left)/50
    // var pos_y = parseInt(chessB[outdex].style.top)/50
    // var value = chessB[index].getAttribute("data-value")
    // console.log(value)
    var arr = []
    // Luật di chuyển Tốt B
    if(value == 10){
        if(pos_y == 6){
            if(a[pos_x+8*(pos_y-2)]==0 && a[pos_x+8*(pos_y-1)]==0) arr.push(pos_x+8*(pos_y-2))
        }
        if(pos_y-1>=0){
            if(a[pos_x+8*(pos_y-1)]==0) arr.push(pos_x+8*(pos_y-1))
        }
        if(pos_x-1>=0 && pos_y-1>=0){
            if(a[pos_x-1+8*(pos_y-1)]>0) arr.push(pos_x-1+8*(pos_y-1))
        }
        if(pos_x+1<8 && pos_y-1>=0){
            if(a[pos_x+1+8*(pos_y-1)]>0) arr.push(pos_x+1+8*(pos_y-1))

        }
    }

    // Luật di chuyển Xe B
    if(value == 50){
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]<0) break
            if(a[pos_x-pos+8*pos_y]>0){
                arr.push(pos_x-pos+8*pos_y)
                break
            }
            arr.push(pos_x-pos+8*pos_y)
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]<0) break
            if(a[pos_x+pos+8*pos_y]>0){
                arr.push(pos_x+pos+8*pos_y)
                break
            }
            arr.push(pos_x+pos+8*pos_y)            
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]<0) break
            if(a[pos_x+8*(pos_y+pos)]>0){
                arr.push(pos_x+8*(pos_y+pos)) 
                break
            }
            arr.push(pos_x+8*(pos_y+pos))             
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]<0) break
            if(a[pos_x+8*(pos_y-pos)]>0){
                arr.push(pos_x+8*(pos_y-pos))                 
                break
            }
            arr.push(pos_x+8*(pos_y-pos)) 
            pos++;
        }
    }

    // Luật di chuyển Mã B
    if(value == 30 && index == 1 || index == 6){
        if(pos_x+2<8 && pos_y+1<8){
            if(a[pos_x+2+8*(pos_y+1)]>=0) arr.push(pos_x+2+8*(pos_y+1))
        }
        if(pos_x+2<8 && pos_y-1>=0){
            if(a[pos_x+2+8*(pos_y-1)]>=0) arr.push(pos_x+2+8*(pos_y-1))
        }
        if(pos_x-2>=0 && pos_y+1<8){
            if(a[pos_x-2+8*(pos_y+1)]>=0) arr.push(pos_x-2+8*(pos_y+1))
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            if(a[pos_x-2+8*(pos_y-1)]>=0) arr.push(pos_x-2+8*(pos_y-1))
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            if(a[pos_x-1+8*(pos_y-2)]>=0) arr.push(pos_x-1+8*(pos_y-2))
        }
        if(pos_x-1>=0 && pos_y+2<8){
            if(a[pos_x-1+8*(pos_y+2)]>=0) arr.push(pos_x-1+8*(pos_y+2))
        }
        if(pos_x+1<8 && pos_y-2>=0){
            if(a[pos_x+1+8*(pos_y-2)]>=0) arr.push(pos_x+1+8*(pos_y-2))
        }
        if(pos_x+1<8 && pos_y+2<8){
            if(a[pos_x+1+8*(pos_y+2)]>=0) arr.push(pos_x+1+8*(pos_y+2))
        }
    }

    // Luật di chuyển Tượng B
    if(value == 30 && index == 2 || index == 5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]<0) break
            if(a[pos_x-x+8*(pos_y-y)]>0) {
                arr.push(pos_x-x+8*(pos_y-y))
                break
            }
            arr.push(pos_x-x+8*(pos_y-y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]<0) break
            if(a[pos_x+x+8*(pos_y+y)]>0) {
                arr.push(pos_x+x+8*(pos_y+y))
                break
            }
            arr.push(pos_x+x+8*(pos_y+y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]<0) break
            if(a[pos_x+x+8*(pos_y-y)]>0) {
                arr.push(pos_x+x+8*(pos_y-y))  
                break
            }
            arr.push(pos_x+x+8*(pos_y-y)) 
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]<0) break
            if(a[pos_x-x+8*(pos_y+y)]>0) {
                arr.push(pos_x-x+8*(pos_y+y)) 
                break
            }
            arr.push(pos_x-x+8*(pos_y+y))             
            x++;y++
        }
    }

    // Luật di chuyển Hậu B
    if(value == 90){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            if(a[pos_x-x+8*(pos_y-y)]<0) break
            if(a[pos_x-x+8*(pos_y-y)]>0) {
                arr.push(pos_x-x+8*(pos_y-y))
                break
            }
            arr.push(pos_x-x+8*(pos_y-y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            if(a[pos_x+x+8*(pos_y+y)]<0) break
            if(a[pos_x+x+8*(pos_y+y)]>0) {
                arr.push(pos_x+x+8*(pos_y+y))
                break
            }
            arr.push(pos_x+x+8*(pos_y+y))            
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            if(a[pos_x+x+8*(pos_y-y)]<0) break
            if(a[pos_x+x+8*(pos_y-y)]>0) {
                arr.push(pos_x+x+8*(pos_y-y))  
                break
            }
            arr.push(pos_x+x+8*(pos_y-y)) 
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            if(a[pos_x-x+8*(pos_y+y)]<0) break
            if(a[pos_x-x+8*(pos_y+y)]>0) {
                arr.push(pos_x-x+8*(pos_y+y)) 
                break
            }
            arr.push(pos_x-x+8*(pos_y+y))             
            x++;y++
        }
        var pos = 1
        while(pos_x - pos>=0){
            if(a[pos_x-pos+8*pos_y]<0) break
            if(a[pos_x-pos+8*pos_y]>0){
                arr.push(pos_x-pos+8*pos_y)
                break
            }
            arr.push(pos_x-pos+8*pos_y)
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            if(a[pos_x+pos+8*pos_y]<0) break
            if(a[pos_x+pos+8*pos_y]>0){
                arr.push(pos_x+pos+8*pos_y)
                break
            }
            arr.push(pos_x+pos+8*pos_y)            
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            if(a[pos_x+8*(pos_y+pos)]<0) break
            if(a[pos_x+8*(pos_y+pos)]>0){
                arr.push(pos_x+8*(pos_y+pos)) 
                break
            }
            arr.push(pos_x+8*(pos_y+pos))             
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            if(a[pos_x+8*(pos_y-pos)]<0) break
            if(a[pos_x+8*(pos_y-pos)]>0){
                arr.push(pos_x+8*(pos_y-pos))                 
                break
            }
            arr.push(pos_x+8*(pos_y-pos)) 
            pos++;
        }
        //return validMoveB(0,outdex,a,posB).concat(validMoveB(2,outdex,a,posB))
        //validMove(0,outdex)
        //validMove(2,outdex)
    }

    // Luật di chuyển Vua B
    if(value == 900){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    if(a[pos_x+i+8*(pos_y+j)]>=0) arr.push(pos_x+i+8*(pos_y+j))
                }
            }
        }
    }

    return arr
}



var dem = 0

function miniMax(arr,depth,alpha,beta,isMax,posA,posB){
    //++dem
    //console.log('dep:',depth)
    if(depth==0 || posA[4]==-1 || posB[4]==-1) {
        //console.log('value',arr,posA,posB)
        ++dem
        return valueCal(arr,posA,posB)
    }
    if(isMax == true){
        //var Mx = -10000
        for(var i=0;i<16;i++){
            var ar = validMoveA(i,i,arr,posA)
            var len = ar.length
            //if (depth==3) console.log('3:A:',i,ar)
            //if (depth==5) console.log('5:A:',i,ar)
            // console.log('A:',i,ar,arr)
            for(var j=0;j<len;j++){
                var b = arr.concat()
                var a1 = posA.concat()
                var a2 = posB.concat()
                var x = posA[i]%8
                var y = Math.floor(posA[i]/8)
                var tam = b[x+8*y]
                b[x+8*y] = 0
                if(b[ar[j]]<0){
                    for(let k=0;k<16;k++){
                        if(a2[k]==ar[j]){
                            a2[k] =-1
                            break
                        }
                    }
                }
                if(i>=8 && i<16 && ar[j]>=56 && ar[j]<64){
                    tam = 90
                }
                b[ar[j]] = tam
                //if(depth==3) console.log('A.Next:',i,ar[j]%8,Math.floor(ar[j]/8))
                
                a1[i] = ar[j]
                var tmp = miniMax(b,depth-1,alpha,beta,false,a1,a2)
                //if(depth==3) console.log(Mx,tmp)
                if(alpha < tmp){
                    alpha = tmp
                    //if(depth==3) console.log('3 : ===== Max ==== : ',Mx)
                    //console.log(depth,x+8*y,ar[j])
                    if(depth==6){
                        console.log('================ choose max : ',alpha)
                        curentMove = x+8*y
                        nextMove = ar[j]
                    }
                    if(alpha>=beta) return alpha
                }
            }
            //if(alpha>=beta) break
        }
        //if(depth==3) console.log('3 : ======= Max ====== : ',Mx)
        //if(Mx<-5000) console.log(Mx)
        return alpha
    }
    else{
        //var Mn = 10000
        for(var i=0;i<16;i++){
            var ar = validMoveB(i,i,arr,posB)
            var len = ar.length
            //console.log('B:',i,ar)
            for(var j=0;j<len;j++){
                var b = arr.concat()
                var b1 = posA.concat()
                var b2 = posB.concat()
                var x = posB[i]%8
                var y = Math.floor(posB[i]/8)
                //if(depth==4) console.log('B.Next:',i,ar[j]%8,Math.floor(ar[j]/8))
                var tam = b[x+8*y]
                b[x+8*y] = 0
                if(b[ar[j]]>0){
                    for(let k=0;k<16;k++){
                        if(b1[k]==ar[j]){
                            b1[k] =-1
                            break
                        }
                    }
                }
                if(i>=8 && i<16 && ar[j]>=0 && ar[j]<8){
                    tam = -90
                }
                b[ar[j]] = tam
                b2[i] = ar[j]
                var tmp = miniMax(b,depth-1,alpha,beta,true,b1,b2)
                //console.log('Value:',tmp)
                if(beta > tmp){
                    beta = tmp
                    //if(depth==4) console.log('4 : ==== Min ==== : ',Mn)
                    //if(depth==1) console.log(depth,x+8*y,ar[j])
                    
                }
                if(alpha>=beta) return beta
            }
            //if(alpha>=beta) break
        }
        //if(depth==4) console.log('======== Min ======= : ',Mn)
        //if(Mn>5000) console.log(Mn)
        return beta
    }
}





var curentMove
var nextMove

function testMove(){
    console.log(miniMax(a,6,-10000,10000,true,posA,posB))
    console.log(curentMove%8,Math.floor(curentMove/8),'->',nextMove%8,Math.floor(nextMove/8))
}





item()
chess()
pos()

function game(turn,a,posA,posB){
    if(turn%2==0){
        var next = chooseNext(chessB,1)
        selectB(next)
        setTimeout(()=>{
            runB(next)
            game(++turn,a,posA,posB)
        }, 3000)
    }
    else{
        miniMax(a,6,-10000,10000,true,posA,posB)
        var next
        for(let i=0;i<16;i++){
            if(posA[i]=curentMove){
                next=i
                break
            }
        }
        selectA(next)
        setTimeout(()=>{
            trans(chessA[next],nextMove%8,Math.floor(nextMove/8),0)
            game(++turn,a,posA,posB)
        }, 5000)
    }
}

// game(0,a,posA,posB)
// chooseNext(chessB,1)
// selectA(1)