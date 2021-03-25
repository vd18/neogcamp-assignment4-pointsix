
var btntranslate = document.querySelector("#btn-translate");
var texarea = document.querySelector("#tex-area");
var outputbox = document.querySelector(".outputbox")

var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translateurl(text){
   return serverurl + "?" + "text=" + text
}






function clickeventhandler(){
// outputbox.innerText =  texarea.value;
   var inputText = texarea.value

   fetch(translateurl(inputText))
   .then(response => response.json())
   .then(json => console.log(json.contents.translated))
   
   };





btntranslate.addEventListener("click", clickeventhandler)



















