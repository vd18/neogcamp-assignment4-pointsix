
var btntranslate = document.querySelector("#btn-translate");
var texarea = document.querySelector("#tex-area");
var outputbox = document.querySelector("#outputbox")

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverurl = "https://api.funtranslations.com/translate/minion.json"

function translateurl(text){
   return serverurl + "?" + "text=" + text
}


function handler(error){
   console.log("errror occured " + error )
   alert("something went wrong try again after some time")


}
function clickeventhandler(){

   var inputText = texarea.value

   fetch(translateurl(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedtext = json.contents.translated
      outputbox.innerText = translatedtext
      
   })
   .catch(handler)
   };


btntranslate.addEventListener("click", clickeventhandler)



















