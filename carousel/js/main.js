// document.getElementById("red").style.opacity = "1";
// var box = document.getElementsByClassName('slide')[0];
var left = document.getElementById('arrow-left');
var right = document.getElementById('arrow-right');

var block = document.getElementById("carousel"); 
var slide = block.getElementsByTagName("span"); 

left.addEventListener('click', function() {
	for (var i = 0; i < slide.length; i++) { 
    	var moving = slide[i].style.transform += 'translateX(-375px)';
    }
})


right.addEventListener('click', function() {
	for (var i = 0; i < slide.length; i++) { 
    	var moving = slide[i].style.transform += 'translateX(375px)';
    }

})
