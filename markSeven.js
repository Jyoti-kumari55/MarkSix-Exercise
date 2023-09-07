var btnTranslate = document.querySelector("#translate-btn");
var inputText = document.querySelector("#text-area");
var outputText = document.querySelector("#display-output");

var serverUrl = "https://api.funtranslations.com/translate/chef.json";

function getTranslateData(input){
    return serverUrl + "?" + "text=" + input;

}

//console.log(inputText)

function buttonClickHandler(){
    console.log("Button clicked");
    console.log("Message:", inputText.value);

    var inputData = inputText.value;

    fetch(getTranslateData(inputData))
    .then((response) => response.json())
    .then((data) => {
       var translatedData  = data.contents.translated ;
       outputText.innerText = translatedData; 
       console.log("Output: ",translatedData)
})
};
btnTranslate.addEventListener("click", buttonClickHandler);