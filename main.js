var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="take my selfie"){
 console.log("taking selfie master") ; 
 SPEAK_FOOL();
}
}
function SPEAK_FOOL(){
var sin=window.speechSynthesis;
speak_data="taking your selfie in five seconds master";
var utterThis=new SpeechSynthesisUtterance(speak_data);
sin.SPEAK_FOOL(utterThis);  
Webcam.attach(camera);
setTimeout(function() {
 snap();   
}, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});
function snap(){
Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="Selfie_image" src="'+data_uri+'">';   
});
}
function save(){
link=
}