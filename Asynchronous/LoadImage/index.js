const theUrl = 'https://picsum.photos/200/300'

function getAIPHttp(theUrl, resolve, index){
    var xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            resolve(xmlHttp, index + 1)
        }
    }
    xmlHttp.open("GET", theUrl, true)
    xmlHttp.send(null)
}

// getAIPHttp(theUrl, (data) =>{
//     document.getElementById('img_1').setAttribute('src', data.responseURL)
//     console.log("Load Image 1 successfully")
//     getAIPHttp(theUrl, (data) =>{
//         document.getElementById('img_2').setAttribute('src', data.responseURL)
//         console.log("Load Image 2 successfully")
//         getAIPHttp(theUrl, (data) =>{
//             document.getElementById('img_3').setAttribute('src', data.responseURL)
//             console.log("Load Image 3 successfully")
//         })
//     })
// })

// const myPromise = new Promise((resolve, reject) => {
//     getAIPHttp(theUrl, resolve, reject)
// })

var listPromise = []

for(let i = 0; i < 100; i++){
    const myPromise = new Promise((resolve, reject) => {
        getAIPHttp(theUrl, resolve, reject)
    })
    listPromise.push(myPromise)
}

// listPromise[0]
//     .then((data, index)=>{
//         document.getElementById(`img_1`).setAttribute('src', data.responseURL)
//         return listPromise[1]
//     })
//     .then(data=>{
//         document.getElementById('img_2').setAttribute('src', data.responseURL)
//         console.log("Load Image 2 successfully")
//         return listPromise[2]
//     })
//     .then(data=>{
//         document.getElementById('img_3').setAttribute('src', data.responseURL)
//         console.log("Load Image 3 successfully")
//     })
//     .catch(err =>{
//         console.log(err)
//     })

const AyncFun = async ()=>{
    for(let i = 0; i < 100; i++){
        const data = await listPromise[i]
        var newImage = document.createElement("img")
        newImage.setAttribute("src", data.responseURL)
        document.body.appendChild(newImage)
    }
}

AyncFun()

