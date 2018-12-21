$(document).ready(function() {

   $("#tabs").tabs();

});

var temp = function(){
	var i=10;
	 return function(){
		return i++;
		}
	}();


	$(document).ready(function(){
$('.slider').bxSlider({
auto: true,
stopAutoOnClick: true,
slideWidth: 300
});
});


		$(document).ready(function(){
$('.slider2').bxSlider({
auto: true,
stopAutoOnClick: true,
slideWidth: 1280
slideHeight: 1024
});
});

/*
console.log (temp());
console.log (temp());
console.log (temp());
console.log (temp());
console.log (temp());

function func(){
	alert('Hello');
}
setTimeout(func,1000);

var timerId = setInterval (function() {
	alert("Так");
},2000);
setTimeout (function(){
	clearInterval (timerId);
	alert("Стоп");	
},5000);

*/


//var canvas = document.getElementById("Canvas"), 
//	context = canvas.getContext("2d");
//context.beginPath();
//
//context.moveTo(10,10);
//context.lineTo(30,150);
//context.lineTo(200,200);
//context.lineTo(250,300);
//
//context.moveTo(100,300);
//context.lineTo(150,400);
//context.lineTo(120,400);
//context.lineTo(100,400);
//context.lineTo(110,280);
//
//context.moveTo(150,300);
//context.lineTo(250,400);
//context.lineTo(300,400);
//context.lineTo(290,400);
//context.lineTo(220,280);
//context.lineTo(50,490);
//context.lineTo(490,400);
//context.lineTo(420,280);
//
//context.moveTo(330,320);
//context.lineTo(430,320);
//context.lineTo(430,420);
//context.lineTo(330,420);
//
//context.closePath();
//
//context.lineWidth = 10;
//context.strokeStyle = "#ebb30c";
//context.fillStyle = "#e28090";
//context.fill();
//context.stroke();
//