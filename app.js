const requestCount = document.getElementById('requestCount');
const connectionCount =document.getElementById('connectionCount');

function changeName(){
  const newName = prompt("Ingrese el nuevo nombre");
  const nameText = document.getElementById('name');
  nameText.innerText = newName;
}

function removeRequest(id) {
  const element = document.getElementById(id);
  element.remove();
  requestCount.innerText = parseInt(requestCount.innerText) - 1;
}

function addRequest(id) {
  removeRequest(id);
  connectionCount.innerText = parseInt(connectionCount.innerText) + 1
}