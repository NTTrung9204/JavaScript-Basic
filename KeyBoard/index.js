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
