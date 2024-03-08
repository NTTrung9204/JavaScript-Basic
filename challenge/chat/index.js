var textInput = "The provided code appears to be functional and generally adheres to some principles of clean code. However, there are some improvements that can be made to enhance readability, maintainability, and adherence to clean coding practices. Let's go through the code and make some suggested improvements. The provided code appears to be functional and generally adheres to some principles of clean code. However, there are some improvements that can be made to enhance readability, maintainability, and adherence to clean coding practices. Let's go through the code and make some suggested improvements. The provided code appears to be functional and generally adheres to some principles of clean code. However, there are some improvements that can be made to enhance readability, maintainability, and adherence to clean coding practices. Let's go through the code and make some suggested improvements";
var textContent = document.getElementsByClassName("container__text")[0];
var outputText = ""
function renderText(index){
    if(index < textInput.length - 1){
        index++
        outputText += textInput[index]
        textContent.innerHTML = outputText
        setTimeout(()=>{
            renderText(index)
        }, 10)
    }
}

renderText(-1)
