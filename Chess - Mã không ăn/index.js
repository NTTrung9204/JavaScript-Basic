var chessA = document.getElementsByClassName("chessA");
var chessB = document.getElementsByClassName("chessB");
var colorMove = "rgba(255, 0, 0, 0.4)"
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
                    break
                }
                if(chessA[j].style.color == "yellow"){
                    trans(chessA[j],Math.floor(i%8),Math.floor(i/8),0)
                    break
                }
            }
            console.log(Math.floor(i%8),Math.floor(i/8));
            // return [i%8,i/8]
        })
    }
}

function trans(element, pos_x, pos_y, key){
    element.style.left = pos_x*50
    element.style.top = pos_y*50
    if(key==0) element.style.color = "black"
    else element.style.color = "73ff00"
}

function selectA(index){
    setColor()
    var key = 0
    var pos_x = parseInt(chessA[index].style.left)/50
    var pos_y = parseInt(chessA[index].style.top)/50
    for(let j=0;j<16;j++){
        if(chessB[j].style.color == "red"){
            trans(chessB[j],pos_x,pos_y,1)
            chessA[index].style.top = -150 + Math.floor(index/8)*50
            chessA[index].style.left = index%8*50
            key = 1;
            break;
        }
    }
    if(key==0){
        for(let k=0;k<16;k++){
            chessA[k].style.color = "black"
        }
        chessA[index].style.color = "yellow"
        moveA(index,index)
    }
    console.log(pos_x,pos_y)
}

function selectB(index){
    setColor()
    var key = 0
    var pos_x = parseInt(chessB[index].style.left)/50
    var pos_y = parseInt(chessB[index].style.top)/50
    for(let j=0;j<16;j++){
        if(chessA[j].style.color == "yellow"){
            trans(chessA[j],pos_x,pos_y,0)
            chessB[index].style.top = 500 - Math.floor(index/8)*50
            chessB[index].style.left = i%8*50
            key = 1;
            break;
        }
    }
    if(key==0){
        for(let k=0;k<16;k++){
            chessB[k].style.color = "73ff00"
        }
        chessB[index].style.color = "red"
        moveB(index,index)
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





























function moveB(index, outdex){
    var item = document.getElementsByClassName("board__item");
    var pos_x = parseInt(chessB[outdex].style.left)/50
    var pos_y = parseInt(chessB[outdex].style.top)/50
    
    // Luật di chuyển Tốt B
    if(16>index && index>=8){
        if(pos_y == 6){
            let key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y-2 == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y-2 == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0) item[pos_x+8*(pos_y-2)].style.backgroundColor = colorMove
        }
        if(pos_y-1>=0){
            let key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y-1 == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y-1 == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0) item[pos_x+8*(pos_y-1)].style.backgroundColor = colorMove
        }
        if(pos_x-1>=0 && pos_y-1>=0){
            for(let j=0;j<16;j++){
                if(pos_x-1 == parseInt(chessA[j].style.left)/50 && pos_y-1 == parseInt(chessA[j].style.top)/50){
                    item[pos_x-1+8*(pos_y-1)].style.backgroundColor = colorMove
                }
            }
        }
        if(pos_x+1>=0 && pos_y-1>=0){
            for(let j=0;j<16;j++){
                if(pos_x+1 == parseInt(chessA[j].style.left)/50 && pos_y-1 == parseInt(chessA[j].style.top)/50){
                    item[pos_x+1+8*(pos_y-1)].style.backgroundColor = colorMove
                }
            }
        }
    }

    // Luật di chuyển Xe B
    if(index == 0 || index == 7){
        
        var pos = 1
        while(pos_x - pos>=0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - pos == parseInt(chessB[j].style.left)/50 && pos_y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - pos == parseInt(chessA[j].style.left)/50 && pos_y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + pos == parseInt(chessB[j].style.left)/50 && pos_y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + pos == parseInt(chessA[j].style.left)/50 && pos_y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y + pos == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y + pos == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y - pos == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y - pos == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
            pos++;
        }
    }

    // Luật di chuyển Mã B
    if(index==1 || index==6){
        
        
        if(pos_x+2<8 && pos_y+1<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+2 == parseInt(chessB[i].style.left)/50 && pos_y+1 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+2+8*(pos_y+1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+2<8 && pos_y-1>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+2 == parseInt(chessB[i].style.left)/50 && pos_y-1 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+2+8*(pos_y-1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-2>=0 && pos_y+1<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-2 == parseInt(chessB[i].style.left)/50 && pos_y+1 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-2+8*(pos_y+1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-2 == parseInt(chessB[i].style.left)/50 && pos_y-1 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-2+8*(pos_y-1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-1 == parseInt(chessB[i].style.left)/50 && pos_y-2 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-1+8*(pos_y-2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-1>=0 && pos_y+2<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-1 == parseInt(chessB[i].style.left)/50 && pos_y+2 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-1+8*(pos_y+2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+1<8 && pos_y-2>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+1 == parseInt(chessB[i].style.left)/50 && pos_y-2 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+1+8*(pos_y-2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+1<8 && pos_y+2<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+1 == parseInt(chessB[i].style.left)/50 && pos_y+2 == parseInt(chessB[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+1+8*(pos_y+2)].style.backgroundColor = colorMove
            }
        }
    }

    // Luật di chuyển Tượng B
    if(index==2 || index==5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - x == parseInt(chessB[j].style.left)/50 && pos_y - y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - x == parseInt(chessA[j].style.left)/50 && pos_y - y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + x == parseInt(chessB[j].style.left)/50 && pos_y + y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + x == parseInt(chessA[j].style.left)/50 && pos_y + y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + x == parseInt(chessB[j].style.left)/50 && pos_y - y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + x == parseInt(chessA[j].style.left)/50 && pos_y - y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - x == parseInt(chessB[j].style.left)/50 && pos_y + y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - x == parseInt(chessA[j].style.left)/50 && pos_y + y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
    }

    // Luật di chuyển Hậu B
    if(index==3){
        moveB(0,3)
        moveB(2,3)
    }

    // Luật di chuyển Vua B
    if(index==4){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    let key = 0
                    for(let k=0;k<16;k++){
                        if(pos_x + i == parseInt(chessB[k].style.left)/50 && pos_y + j == parseInt(chessB[k].style.top)/50){
                            key = 1
                            break
                        }
                    }
                    if(key == 0){
                        item[pos_x+i+8*(pos_y+j)].style.backgroundColor = colorMove
                    }
                }
            }
        }
    }
}

function moveA(index, outdex){
    var item = document.getElementsByClassName("board__item");
    var pos_x = parseInt(chessA[outdex].style.left)/50
    var pos_y = parseInt(chessA[outdex].style.top)/50
    
    // Luật di chuyển Tốt A
    if(16>index && index>=8){
        if(pos_y == 1){
            let key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y+2 == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y+2 == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0) item[pos_x+8*(pos_y+2)].style.backgroundColor = colorMove
        }
        if(pos_y+1 < 8){
            let key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y+1 == parseInt(chessB[j].style.top)/50){
                    key = 1
                    break
                }
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y+1 == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0) item[pos_x+8*(pos_y+1)].style.backgroundColor = colorMove
        }
        if(pos_x+1<8 && pos_y+1<8){
            for(let j=0;j<16;j++){
                if(pos_x+1 == parseInt(chessB[j].style.left)/50 && pos_y+1 == parseInt(chessB[j].style.top)/50){
                    item[pos_x+1+8*(pos_y+1)].style.backgroundColor = colorMove
                }
            }
        }
        if(pos_x-1>=0 && pos_y+1<8){
            for(let j=0;j<16;j++){
                if(pos_x-1 == parseInt(chessB[j].style.left)/50 && pos_y+1 == parseInt(chessB[j].style.top)/50){
                    item[pos_x-1+8*(pos_y+1)].style.backgroundColor = colorMove
                }
            }
        }
    }

    // Luật di chuyển Xe A
    if(index == 0 || index == 7){
        
        var pos = 1
        while(pos_x - pos>=0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - pos == parseInt(chessA[j].style.left)/50 && pos_y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - pos == parseInt(chessB[j].style.left)/50 && pos_y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_x + pos<8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + pos == parseInt(chessA[j].style.left)/50 && pos_y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + pos == parseInt(chessB[j].style.left)/50 && pos_y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+pos+8*pos_y].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y + pos<8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y + pos == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y + pos == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+8*(pos_y+pos)].style.backgroundColor = colorMove
            pos++;
        }
        pos = 1
        while(pos_y - pos>=0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x == parseInt(chessA[j].style.left)/50 && pos_y - pos == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x == parseInt(chessB[j].style.left)/50 && pos_y - pos == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+8*(pos_y-pos)].style.backgroundColor = colorMove
            pos++;
        }
    }

    // Luật di chuyển Mã A
    if(index==1 || index==6){
        
        
        if(pos_x+2<8 && pos_y+1<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+2 == parseInt(chessA[i].style.left)/50 && pos_y+1 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+2+8*(pos_y+1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+2<8 && pos_y-1>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+2 == parseInt(chessA[i].style.left)/50 && pos_y-1 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+2+8*(pos_y-1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-2>=0 && pos_y+1<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-2 == parseInt(chessA[i].style.left)/50 && pos_y+1 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-2+8*(pos_y+1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-2>=0 && pos_y-1>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-2 == parseInt(chessA[i].style.left)/50 && pos_y-1 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-2+8*(pos_y-1)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-1>=0 && pos_y-2>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-1 == parseInt(chessA[i].style.left)/50 && pos_y-2 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-1+8*(pos_y-2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x-1>=0 && pos_y+2<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x-1 == parseInt(chessA[i].style.left)/50 && pos_y+2 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x-1+8*(pos_y+2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+1<8 && pos_y-2>=0){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+1 == parseInt(chessA[i].style.left)/50 && pos_y-2 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+1+8*(pos_y-2)].style.backgroundColor = colorMove
            }
        }
        if(pos_x+1<8 && pos_y+2<8){
            var key = 0
            for(let i=0;i<16;i++){
                if(pos_x+1 == parseInt(chessA[i].style.left)/50 && pos_y+2 == parseInt(chessA[i].style.top)/50){
                    key = 1
                    break
                }
            }
            if(key == 0){
                item[pos_x+1+8*(pos_y+2)].style.backgroundColor = colorMove
            }
        }
    }

    // Luật di chuyển Tượng A
    if(index==2 || index==5){
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y - y >= 0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - x == parseInt(chessA[j].style.left)/50 && pos_y - y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - x == parseInt(chessB[j].style.left)/50 && pos_y - y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y + y < 8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + x == parseInt(chessA[j].style.left)/50 && pos_y + y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + x == parseInt(chessB[j].style.left)/50 && pos_y + y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x + x < 8 && pos_y - y >= 0){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x + x == parseInt(chessA[j].style.left)/50 && pos_y - y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x + x == parseInt(chessB[j].style.left)/50 && pos_y - y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x+x+8*(pos_y-y)].style.backgroundColor = colorMove
            x++;y++
        }
        var x = 1
        var y = 1
        while(pos_x - x >= 0 && pos_y + y < 8){
            var key = 0
            for(let j=0;j<16;j++){
                if(pos_x - x == parseInt(chessA[j].style.left)/50 && pos_y + y == parseInt(chessA[j].style.top)/50){
                    key = 1
                    break;
                }
                if(pos_x - x == parseInt(chessB[j].style.left)/50 && pos_y + y == parseInt(chessB[j].style.top)/50){
                    key = 1
                    item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
                    break;
                }
            }
            if(key == 1) break
            item[pos_x-x+8*(pos_y+y)].style.backgroundColor = colorMove
            x++;y++
        }
    }

    // Luật di chuyển Hậu A
    if(index==3){
        moveA(0,3)
        moveA(2,3)
    }

    // Luật di chuyển Vua A
    if(index==4){
        for(let i=-1;i<2;i++){
            for(let j=-1;j<2;j++){
                if(pos_x + i >= 0 && pos_x + i < 8 && pos_y + j >= 0 && pos_y + j < 8){
                    let key = 0
                    for(let k=0;k<16;k++){
                        if(pos_x + i == parseInt(chessA[k].style.left)/50 && pos_y + j == parseInt(chessA[k].style.top)/50){
                            key = 1
                            break
                        }
                    }
                    if(key == 0){
                        item[pos_x+i+8*(pos_y+j)].style.backgroundColor = "rgba(255, 0, 0, 0.4)"
                    }
                }
            }
        }
    }
}





item()
chess()
pos()

function game(turn){
    console.log('turn : ',turn)
    if(turn%2==0){
        turn++
        selectB(1)
        setTimeout(()=>{
            runB(1)
            game(turn)
        }, 1000)
    }
    else{
        turn++
        selectA(6)
        setTimeout(()=>{
            runA(6)
            game(turn)
        }, 1000)
    }
}

game(1)