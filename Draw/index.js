const backGround = document.querySelector('.backGround');
const colorPicker = document.getElementsByClassName('tool__Choose');
console.log(colorPicker);
const WIDTH = 40;

backGround.style.height = `${WIDTH * 15}px`;
backGround.style.width = `${WIDTH * 15}px`;

var isClicked = false;
var Color = 'black';
var isRainbow = false;

for(let _ = 0; _ < colorPicker.length - 2; _++) {
    colorPicker[_].addEventListener('click', (event) => {
        Color = event.target.getAttribute('data-color');
        isRainbow = false;
    });
}

colorPicker[colorPicker.length - 2].addEventListener('click', (event) => {
    isRainbow = true;
});

colorPicker[colorPicker.length - 1].addEventListener('click', (event) => {
    const square = document.querySelectorAll('.squareCell');
    square.forEach((element) => {
        element.style.backgroundColor = '#00000061';
    });
});

document.body.addEventListener('mousedown', (e) => {
    isClicked = true;
});


document.body.addEventListener('mouseup', (e) => {
    isClicked = false
})


for(let _ = 0; _ < WIDTH * WIDTH; _++) {
    const square = document.createElement('div');
    square.classList.add('squareCell');
    square.addEventListener('mouseover', (event) => {
        if(isRainbow) {
            Color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        }

        if(isClicked) event.target.style.backgroundColor = Color;
    });
    backGround.appendChild(square);
}

