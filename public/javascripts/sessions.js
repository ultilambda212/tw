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
  console.log(event);
  event.preventDefault();
  if(logInForm.checkValidity()){
    var params = {};
    for (element of logInForm.elements) {
      params[element.name] = element.value;
    }
    console.log("ajax");
    ajax('POST', '/sessions', params, function() {
      console.log(this.responseText);
    });
    alert("Logged in");
  } else {
    logInForm.reportValidity();
  }
  return false;
}
logInForm.addEventListener("submit", logIn);
