const date= document.querySelector(".date-hours");
var m= require('moment');
var hour=m().get("hour");
var minute= m().get("minute");
var h_m= hour+":"+minute;
console.log(minute.lenght);

date.textContent=h_m;
