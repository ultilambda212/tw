var soare=document.getElementById("Micsoreaza");
soare.addEventListener("click", function(){
  setInterval(function(){ schimbari(); }, 5000);
});

function revert(){
  var soare=document.getElementById("soare");
  soare.style.width = "100px";
  soare.style.height = "100px";
  var state=document.getElementById("state");
  state.innerHTML="Dimensions: 100px 100px";
}

function change(){
  var soare=document.getElementById("soare");
  soare.style.width = "50px";
  soare.style.height = "50px";
  var state=document.getElementById("state");
  state.innerHTML="Dimensions: 50px 50px";
}

function schimbari(){
  change();
  setTimeout(function(){ revert(); }, 3000);
}

function loaded(){
  document.getElementById('load').style.display = "none";
}

window.addEventListener('load', loaded);
function leaving(){
  return "leave :(";
}

var done = document.getElementById('done');
done.onloadeddata = function(){
  alert("ADAD");
}
