const words = document.getElementsByClassName('wordSpan');
var text = "wellcome to the jungle. we got everything you want";
text = removeSpecialCharactersAndConvertToLowercase(text);
const snapText = document.getElementsByClassName('snapText')[0];
console.log(text);
var result = text.split('');
const theUrlMessage = 'https://api.api-ninjas.com/v1/jokes'
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 30;
const ALERT_THRESHOLD = 10;
var isEnd = false;
var accuracy = 0;
var modal = document.getElementsByClassName("modal")[0];
var Blur = document.getElementsByClassName("blur")[0];
var icon = document.getElementsByClassName("model__icon")[0];
var Close = document.getElementsByClassName("modal__close")[0];
function closeModal(){
    modal.style.top = "-100%";
    modal.style.transform = "translate(-50%,0)";
    Blur.style.display = "none";
}

function raiseResult (){
    modal.style.top = "50%";
    modal.style.transform = "translate(-50%,-50%)";
    Blur.style.display = "block";
    document.getElementsByClassName("modal__text")[0].innerHTML = accuracy;
}

Blur.addEventListener("click", closeModal);
icon.addEventListener("click", closeModal);
Close.addEventListener("click", closeModal);



const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;



function onTimesUp() {
  clearInterval(timerInterval);
  raiseResult();
  isEnd = true;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}


function removeSpecialCharactersAndConvertToLowercase(inputString) {
    return inputString.replace(/[!@#$%^&*()-=_|\/><"':?]/gi, '').toLowerCase();
}

function getAIPHttpText(theUrl, resolve) {
    fetch(theUrl, {
        headers: {
            "X-API-Key": "cSQYtP9GWwv5EeO8SI8voA==5UVe83okbliTG8PR"
        }
    })
        .then(response => resolve(response.json()))
        .catch(error => reject(error));

}

function getAIPHttpImage(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            resolve(xmlHttp)
        }
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

const MessageData = async () => {
    const Message = (await new Promise((resolve) => {
        getAIPHttpText(theUrlMessage, resolve)
    }))[0].joke

    return Message;
}

function loadData() {
    snapText.innerHTML = '';
    for(let i = 0; i < result.length; i++){
        snapText.innerHTML += `<span class="wordSpan">${result[i]}</span>`
    }
}

let index = 0;
let expected = 0;
document.addEventListener('keydown', (e)=>{
    if(isEnd){
        raiseResult();
        return;
    }
    if(expected === 0){
        startTimer();
        expected = 1;
    }
    if(e.key === result[index]){
        accuracy++;
    }
    words[index].style.color = e.key === result[index] ? 'lightgreen' : 'red';
    index++;
    if(index === result.length){
        index = 0;
        appendMessage(1);
    }
    try{
        words[index].style.color = 'yellow'
    }
    catch(e){
        console.log(e)
    }
})

async function appendMessage() {
    snapText.innerHTML = '<div class="loader"></div>';
    const data = await MessageData()
    text = removeSpecialCharactersAndConvertToLowercase(data);
    result = text.split('');
    loadData()
}

loadData()

var contentItem = document.getElementsByClassName('content__item');
var contentItemBackground1 = document.getElementsByClassName('content__item-background-1');
var contentItemBackground2 = document.getElementsByClassName('content__item-background-2');
var contentItemBackground3 = document.getElementsByClassName('content__item-background-3');
var contentItemBackground4 = document.getElementsByClassName('content__item-background-4');
var contentItemBackground5 = document.getElementsByClassName('content__item-background-5');
var contentItemBackground6 = document.getElementsByClassName('content__item-background-6');

let bottomWidthBackground = 35;
let topHeightBackground = 25;
let leftrightWidthBackforund = 8;
let bottomHeightBackground = 30;
let skewLeftRight = Math.atan(bottomHeightBackground/(leftrightWidthBackforund)) * (180 / Math.PI);


function styleKey(i){
        let btWB = bottomWidthBackground;
        let tHB = topHeightBackground;
        let lrWB = leftrightWidthBackforund;
        let btHB = bottomHeightBackground;
        let slr = skewLeftRight;

        let j = 1;
        if(contentItem[i].classList.contains('multiplicate2')){
            btWB = btWB * 2;
        }
        if(contentItem[i].classList.contains('multiplicate1.5')){
            btWB = btWB * 1.5;
        }
        if(contentItem[i].classList.contains('multiplicate1.25')){
            btWB = btWB * 1.25;
        }
        if(contentItem[i].classList.contains('multiplicate2.5')){
            btWB = btWB * 2.5;
        }
        if(contentItem[i].classList.contains('multiplicate3')){
            btWB = btWB * 3;
        }
        if(contentItem[i].classList.contains('multiplicate8')){
            btWB = btWB * 8;
        }
        
        contentItem[i].style.width = `${btWB + lrWB * 2}px`;
        contentItem[i].style.height = `${tHB + btHB}px`;

        contentItemBackground1[i].style.width = `${btWB}px`;
        contentItemBackground1[i].style.height = `${btHB}px`;
        contentItemBackground2[i].style.width = `${btWB}px`;
        contentItemBackground2[i].style.height = `${tHB}px`;
        contentItemBackground2[i].style.justifyContent = 'center';
        contentItemBackground3[i].style.borderLeftWidth = `${lrWB}px`;
        contentItemBackground3[i].style.borderBottomWidth = `${btHB}px`;
        contentItemBackground4[i].style.borderRightWidth = `${lrWB}px`;
        contentItemBackground4[i].style.borderBottomWidth = `${btHB}px`;

        contentItemBackground5[i].style.width = `${lrWB}px`;
        contentItemBackground5[i].style.height = `${tHB}px`;
        contentItemBackground6[i].style.width = `${lrWB}px`;
        contentItemBackground6[i].style.height = `${tHB}px`;

        contentItemBackground5[i].style.transform = `skewy(-${slr}deg)`;
        contentItemBackground6[i].style.transform = `skewy(${slr}deg)`;

        contentItemBackground2[i].style.transform = `translatey(-${tHB}px)`;
        contentItemBackground3[i].style.transform = `translatex(-${lrWB}px)`;
        contentItemBackground4[i].style.transform = `translatex(${btWB}px)`;
        contentItemBackground5[i].style.top = `-${tHB - Math.tan(slr * Math.PI / 180) * (lrWB / 2)}px`;
        contentItemBackground5[i].style.left = `-${lrWB}px`;
        contentItemBackground6[i].style.top = `-${tHB - Math.tan(slr * Math.PI / 180) * (lrWB / 2)}px`;
        contentItemBackground6[i].style.left = `${btWB}px`;
}



document.addEventListener('DOMContentLoaded',() => {
    setTimeout(()=>{
        for(let i = 0; i < contentItem.length; ++i){

            if(i >= 15 && i < 30){
                contentItem[i].style.transform = `translatey(-${bottomHeightBackground/2}px)`;
            }
            if(i >= 30 && i < 44){
                contentItem[i].style.transform = `translatey(-${bottomHeightBackground}px)`;
            }
            if(i >= 44 && i < 58){
                contentItem[i].style.transform = `translatey(-${bottomHeightBackground * 3/2}px)`;
            }
            if(i >= 58 && i < 100){
                contentItem[i].style.transform = `translatey(-${bottomHeightBackground *2}px)`;
            }
        
            styleKey(i);
        }
    },0);
});

function funcKeyUp(i){
    let down = 6;
    if(i >= 0 && i < 15){
        contentItemBackground2[i].style.backgroundColor = '#d2cdcd';
        contentItem[i].style.transform = `translatey(${down}px)`;
    }
    if(i >= 15 && i < 30){
        contentItemBackground2[i].style.backgroundColor = '#d2cdcd';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground/2 - down}px)`;
    }
    if(i >= 30 && i < 44){
        contentItemBackground2[i].style.backgroundColor = '#d2cdcd';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground - down}px)`;
    }
    if(i >= 44 && i < 58){
        contentItemBackground2[i].style.backgroundColor = '#d2cdcd';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground * 3/2 - down}px)`;
    }
    if(i >= 58 && i < 100){
        contentItemBackground2[i].style.backgroundColor = '#d2cdcd';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground *2 - down}px)`;
    }
}

function funcKeyDown(i){
    if(i >= 0 && i < 15){
        contentItemBackground2[i].style.backgroundColor = 'rgb(228, 225, 225)';
        contentItem[i].style.transform = `translatey(${0}px)`;
    }
    if(i >= 15 && i < 30){
        contentItemBackground2[i].style.backgroundColor = 'rgb(228, 225, 225)';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground/2}px)`;
    }
    if(i >= 30 && i < 44){
        contentItemBackground2[i].style.backgroundColor = 'rgb(228, 225, 225)';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground}px)`;
    }
    if(i >= 44 && i < 58){
        contentItemBackground2[i].style.backgroundColor = 'rgb(228, 225, 225)';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground * 3/2}px)`;
    }
    if(i >= 58 && i < 100){
        contentItemBackground2[i].style.backgroundColor = 'rgb(228, 225, 225)';
        contentItem[i].style.transform = `translatey(-${bottomHeightBackground *2}px)`;
    }
}

document.addEventListener('keydown', (event)=>{
    console.log(event);
    for(let i = 0; i < contentItem.length; ++i){
        if(event.key.toUpperCase() === contentItemBackground2[i].innerHTML){
            funcKeyUp(i);
        }
        if(event.code === "Space" && contentItemBackground2[i].classList.contains('space')){
            funcKeyUp(i);
        }
        if(event.code === "Backspace" && contentItemBackground2[i].classList.contains('Backspace')){
            funcKeyUp(i);
        }
        if(event.code === "ShiftLeft" && contentItemBackground2[i].classList.contains('ShiftLeft')){
            funcKeyUp(i);
        }
        if(event.code === "ShiftRight" && contentItemBackground2[i].classList.contains('ShiftRight')){
            funcKeyUp(i);
        }
        if(event.code === "ControlLeft" && contentItemBackground2[i].classList.contains('ControlLeft')){
            funcKeyUp(i);
        }
        if(event.code === "ControlRight" && contentItemBackground2[i].classList.contains('ControlRight')){
            funcKeyUp(i);
        }
        if(event.key === "CapsLock" && contentItemBackground2[i].classList.contains('CapsLock')){
            funcKeyUp(i);
        }
        if(event.key === "Enter" && contentItemBackground2[i].classList.contains('Enter')){
            funcKeyUp(i);
        }
        if(event.code === "ArrowRight" && contentItemBackground2[i].classList.contains('ArrowRight')){
            funcKeyUp(i);
        }
        if(event.code === "ArrowUp" && contentItemBackground2[i].classList.contains('ArrowUp')){
            funcKeyUp(i);
        }
        if(event.code === "ArrowLeft" && contentItemBackground2[i].classList.contains('ArrowLeft')){
            funcKeyUp(i);
        }
        if(event.code === "ArrowDown" && contentItemBackground2[i].classList.contains('ArrowDown')){
            funcKeyUp(i);
        }
    }
} );

document.addEventListener('keyup', (event)=>{
    console.log(event);
    for(let i = 0; i < contentItem.length; ++i){
        if(event.key.toUpperCase() === contentItemBackground2[i].innerHTML){
            funcKeyDown(i);
        }
        if(event.code === "Space" && contentItemBackground2[i].classList.contains('space')){
            funcKeyDown(i);
        }
        if(event.code === "Backspace" && contentItemBackground2[i].classList.contains('Backspace')){
            funcKeyDown(i);
        }
        if(event.code === "ShiftLeft" && contentItemBackground2[i].classList.contains('ShiftLeft')){
            funcKeyDown(i);
        }
        if(event.code === "ShiftRight" && contentItemBackground2[i].classList.contains('ShiftRight')){
            funcKeyDown(i);
        }
        if(event.code === "ControlLeft" && contentItemBackground2[i].classList.contains('ControlLeft')){
            funcKeyDown(i);
        }
        if(event.code === "ControlRight" && contentItemBackground2[i].classList.contains('ControlRight')){
            funcKeyDown(i);
        }
        if(event.key === "CapsLock" && contentItemBackground2[i].classList.contains('CapsLock')){
            funcKeyDown(i);
        }
        if(event.key === "Enter" && contentItemBackground2[i].classList.contains('Enter')){
            funcKeyDown(i);
        }
        if(event.code === "ArrowRight" && contentItemBackground2[i].classList.contains('ArrowRight')){
            funcKeyDown(i);
        }
        if(event.code === "ArrowUp" && contentItemBackground2[i].classList.contains('ArrowUp')){
            funcKeyDown(i);
        }
        if(event.code === "ArrowLeft" && contentItemBackground2[i].classList.contains('ArrowLeft')){
            funcKeyDown(i);
        }
        if(event.code === "ArrowDown" && contentItemBackground2[i].classList.contains('ArrowDown')){
            funcKeyDown(i);
        }
    }
} );

document.querySelector('.reset').addEventListener('click', ()=>{
    location.reload();
});