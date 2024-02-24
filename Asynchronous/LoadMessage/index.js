const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const containerLoader = get(".containerLoader");
var isActionExecuted = false;

const BOT_NAME = "Bob";
const PERSON_NAME = "Alice";

const theUrlMessage = 'https://api.api-ninjas.com/v1/jokes'
const theUrlUser = 'https://api.api-ninjas.com/v1/randomuser'
const theUrlAvatar = 'https://picsum.photos/200/300'
const theUrlTittle = 'https://api.api-ninjas.com/v1/babynames'

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";

    botResponse();
});

async function appendMessage(amount) {
    containerLoader.style.opacity = 1
    for(let _ = 0; _ < amount; _++){
        const data = await MessageData()
    
        const msgHTML = `
        <div class="msg ${data.Side}-msg">
          <div class="msg-img" style="background-image: url(${data.Avatar})"></div>
    
          <div class="msg-bubble">
            <div class="msg-info">
              <div class="msg-info-name">${data.Username}</div>
              <div class="msg-info-time">${data.Time}</div>
            </div>
    
            <div class="msg-text">${data.Message}</div>
          </div>
        </div>
      `;
    
        msgerChat.insertAdjacentHTML("afterbegin", msgHTML);
        const heightChild = document.getElementsByClassName("msg")[0].style.height

        msgerChat.scrollTop += 1*heightChild;

        if(msgerChat.scrollTop == 0){
            msgerChat.scrollTop = 100
        }
    }
    containerLoader.style.opacity = 0
    isActionExecuted = false
}


// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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

    const Username = (await new Promise((resolve) => {
        getAIPHttpText(theUrlUser, resolve)
    })).username

    const Tittle = (await new Promise((resolve) => {
        getAIPHttpText(theUrlTittle, resolve)
    }))

    const Avatar = (await new Promise((resolve) => {
        getAIPHttpImage(theUrlAvatar, resolve)
    })).responseURL

    const Side = Math.random() <= 0.8 ? "left" : "right"

    return {
        Message,
        Username,
        Tittle,
        Avatar,
        Side,
        Time: formatDate(new Date())
    }

}

function isOnTop(){
    return msgerChat.scrollTop <= 0
}

appendMessage(6)

msgerChat.addEventListener("scroll", ()=>{
    if(!isActionExecuted && isOnTop()){
        isActionExecuted = true
        appendMessage(5)
    }
})



