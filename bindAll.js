import Meteo from "./meteo_class.js";
const note= document.querySelector(".meteo-link");
const meteo= document.querySelector(".meteo-app");
const svg= document.querySelector("#svg");
const smartphone= document.querySelector(".smartphone-controll");
const text= document.querySelector(".weather");
const img= document.querySelector("#meteo-photo");
const myApp= new Meteo();
myApp.addEvent();

note.addEventListener("click", function(){
    smartphone.style.visibility="hidden";
    setTimeout(function(){
        meteo.style.visibility="visible";
    },500);

    
});
svg.addEventListener("click", function(){
    meteo.style.visibility="hidden"
    text.style.visibility="hidden";
    img.src="";
    smartphone.style.visibility="visible";
})