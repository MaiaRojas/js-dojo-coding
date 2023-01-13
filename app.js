
function pushLike (element) {
  const demoLike = document.getElementById(element)
  const demoValue = parseInt(demoLike.innerHTML);
  demoLike.innerHTML = demoValue + 1;
}