var body = document.getElementsByTagName("body")[0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var code = document.getElementsByClassName("code")[0];

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    code.setAttribute("value", `${body.style.background};`);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);