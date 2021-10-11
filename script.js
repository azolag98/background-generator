	/*var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var body = document.getElementById("gradient");

function addStyle(){
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	//to display the name of the background we're changing

	css.textContent = body.style.background + ";";
	//css.innerHTML = body.style.background + ";";

}


color1.addEventListener("input", addStyle);

color2.addEventListener("input", addStyle);