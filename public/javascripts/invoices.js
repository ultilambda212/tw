function ajax(method, path, params, cb) {
  var body = JSON.stringify(params);
  var xhrio = new XMLHttpRequest();
  xhrio.open(method, path, true);
  xhrio.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhrio.onreadystatechange = cb;
  xhrio.send(body);
}

var newInvoice = document.getElementById('invoice');
function invoice(event) {
  event.preventDefault();
  if(newInvoice.checkValidity()){
    var params = {};
    for (element of newInvoice.elements) {
      params[element.name] = element.value;
    }
    ajax('POST', '/invoices', params, function() {
      console.log(this.responseText);
    });
    alert("Invoiced");
  } else {
    newInvoice.reportValidity();
  }
  return false;
}
newInvoice.addEventListener("submit", invoice);


var showContacts = document.getElementById('show-contacts');
var containerContacts = document.getElementById('container-contacts');
showContacts.addEventListener("click", function(){
  ajax("GET", "/users/contacts", {}, function(){
    if (this.readyState == 4 && this.status == 200) {
      //containerContacts.innerHTML = this.responseText;
      var ok = true;
      for(contact of JSON.parse(this.responseText)){
        var node = document.createElement("LI");
        var string = "";
        for(iterate in contact){
          console.log(iterate);
          string = string + iterate + ":" + contact[iterate] + "  ";
        }
        var s = document.createTextNode(string);
        node.appendChild(s);
        if(ok){
          var list = document.getElementById('container-contacts');
          list.insertBefore(node, list.childNodes[0]);
          ok = false;
        } else {
          containerContacts.appendChild(node);
        }
      }
    }
  })
});

document.getElementById('colorDescription').addEventListener("keypress", colorRed);
function colorRed(){
  document.getElementById('colorDescription').style.backgroundColor="green";
}

function deleteFirstLi(){
  var deleteFirst = document.getElementById('container-contacts');
  if(deleteFirst.hasChildNodes){
    deleteFirst.removeChild(deleteFirst.childNodes[0]);
  }
}
