var alert;
alert('Wszystko Działa!');

var imie = 'Maciek';
var wiek = 30;

var console;
console.log(imie);
console.log(wiek);

var document;
var nowy = document.createElement("p");
var node = document.createTextNode("This is new.");
nowy.appendChild(node);

var element = document.getElementById("stronka");
element.appendChild(nowy);

nowy.style.paddingTop = "20px";
nowy.style.color = "yellow";


function myFunction() {
    "use strict";
    var element2 = document.getElementById("middle");
    element2.classList.add("mystyle");
}