var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-area");
var outputText = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function translateText(input){
    return serverUrl + "?" + "text=" + input;

}

function errorHandler(error){
    console.log("error occured! ", error);
    alert("Something goes wrong with the server... Try again after sometime !!");

}
function clickButtonHandler(){
    console.log("Button Clicked!!");
     console.log("Input : ", inputText.value);
    // outputText.innerText = "Hello " + inputText.value;

    var inputData = inputText.value;

    fetch(translateText(inputData))
     .then((response) => response.json())
     .then((data) => {
        var translatedData  = data.contents.translated ;
        outputText.innerText = translatedData; 
})
.catch(errorHandler);
}
btnTranslate.addEventListener("click", clickButtonHandler);
