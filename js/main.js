// document.getElementById("red").style.opacity = "1";

function light () {
	setTimeout(function () {
		document.getElementById("red").style.opacity = "1";
	}, 1*1000);
	setInterval(function () {
		document.getElementById("red").style.opacity = "0";
	}, 2*1000);
	setTimeout(function () {
		document.getElementById("yellow").style.opacity = "1";
	}, 2*1000);
	setTimeout(function () {
		document.getElementById("yellow").style.opacity = "0";
	}, 3*1000);
	setTimeout(function () {
		document.getElementById("green").style.opacity = "1";
	}, 3*1000);
	setTimeout(function () {
		document.getElementById("green").style.opacity = "0";
	}, 4*1000);
	setTimeout(light, 3*1000);
}
light ();