var textInput = document.querySelector("#input-area");
var outputTextArea = document.querySelector("#output-area");
var btnTranslate = document.querySelector("#btn-translate");

var URL = "https://api.funtranslations.com/translate/minion.json";

function urlBuilder(input){
    return URL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("There's been some error over here. Could you maybe try again later?", error);
}

function clickHandler(){
    var inputText = textInput.value;

    fetch(urlBuilder(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedData = json.contents.translated;
        outputTextArea.innerText = translatedData;
        console.log(json);
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);