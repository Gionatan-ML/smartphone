const my_canva = document.querySelector("canvas");
my_canva.width=40;
my_canva.height=40;
var cv= my_canva.getContext("2d");
cv.beginPath();
cv.arc(my_canva.width/2, my_canva.height/2, 10,0, 2*Math.PI );
cv.strokeStyle="black";
cv.lineWidth="1"
cv.stroke();