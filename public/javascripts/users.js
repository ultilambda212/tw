function ajax(method, path, params, cb) {
  var body = JSON.stringify(params);
  var xhrio = new XMLHttpRequest();
  xhrio.open(method, path, true);
  xhrio.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhrio.onreadystatechange = cb;
  xhrio.send(body);
  console.log(xhrio);
}

var signUpForm = document.getElementById('sign-up');
function signUp(event) {
  event.preventDefault();
  if(signUpForm.checkValidity()){
    var params = {};
    for (element of signUpForm.elements) {
      params[element.name] = element.value;
    }
    ajax('POST', '/users', params, function() {
      console.log(this.responseText);
    });
    alert("Signed up");
  } else {
    signUpForm.reportValidity();
  }
  return false;
}
signUpForm.addEventListener("submit", signUp);
