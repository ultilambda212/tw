
function timeout(){
  setTimeout(function(){ document.getElementById("coords").innerHTML = ""; }, 3000);
}

function showCoordinates(event){
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords" + y;
  document.getElementById("coords").innerHTML = coords;
  timeout();
}

function date(){
  var d = new Date();
  document.getElementById("date").innerHTML = d;
}

function checkIfSpecial(event){
  var x = document.getElementById("pressed");
  if(event.altKey){
    alert("AI apasat ALT");
  }
  if(event.ctrlKey){
    alert("Ai apasat CTRL");
  }
  if(event.shiftKey){
    alert("Ai apasat SHIFT");
  }
}