function ajax(method, path, params, cb) {
  var body = JSON.stringify(params);
  var xhrio = new XMLHttpRequest();
  xhrio.open(method, path, true);
  xhrio.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhrio.onreadystatechange = cb;
  xhrio.send(body);
  console.log(xhrio);
}

var logInForm = document.getElementById('log-in-form');
function logIn(event) {
  event.preventDefault();
  if(logInForm.checkValidity()){
    var params = {};
    for (element of logInForm.elements) {
      params[element.name] = element.value;
    }
    ajax('POST', '/sessions', params, function() {
      console.log("???");
      if (JSON.parse(this.responseText)["result"] == "ok"){
       document.cookie = "username=" + params.username;
       window.location = "/pages/conectat"
      } else {
        alert("Logare esuata.");
      }
    });
  } else {
    logInForm.reportValidity();
  }
  return false;
}
logInForm.addEventListener("submit", logIn);
