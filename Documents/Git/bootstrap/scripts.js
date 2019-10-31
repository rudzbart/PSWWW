var z= document.getElementById("hello");
console.log("z = " , z);
z.innerHTML = "Hello, Master!!!!";

var node = document.createElement("li");
var text = document.createTextNode("Fiat");
node.appendChild(text);
document.getElementById("moja lista").appendChild(node);

var x1 = document.querySelectorAll('.example');
x1[0].style.background = "green";
x1[1].style.background = "yellow";

var x = document.getElementsByClassName("badge-light");
x[0].innerHTML = 0;

function myfunction(){
    var button = document.getElementsByClassName("badge-light");
    var value = parseInt(button[0].innerHTML,10) +1;
    button[0].innerHTML = value;
    
}

function myfunction2(){
    var button = document.getElementsByClassName("badge");
    var value = parseInt(button[0].innerHTML,10) +1;
    button[0].innerHTML = value;
    
}

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

