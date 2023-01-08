
function logout() {
  const btnLogin = document.getElementById('login');
  btnLogin.innerText = 'Logout';
};

function hideBtn(id) {
  const btnToRemove = document.getElementById('addBtn');
  btnToRemove.remove();
}

function showMessage() {
  alert('Ninja was liked!');
}
