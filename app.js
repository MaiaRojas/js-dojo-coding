function loadingTemp(elem) {
  const text = elem.innerText;
  const city = document.getElementById("city");
  alert("Cargando informe meteorológico…")
  city.innerText = text;
}

function removeCookie() {
  const cookie = document.getElementById('cookie');
  cookie.remove()
}

function changeTemp(elem) {
  const value = document.getElementById("temperature").value;
  const ids = ["temp-1", "temp-2", "temp-3", "temp-4", "temp-5", "temp-6", "temp-7", "temp-8"]

  if (value === "C") {
    Convert(ConvertFatoCel, ids)
  } else if (value === "F") {
    Convert(ConvertCeltoFa, ids)
  } else {
    alert ("No manejamos ese tipo de conversion :(");
  }
}


function Convert (fun, ids) {
  ids.map(id => {
    const Temp = document.getElementById(id);
    const newValue = fun(parseInt(Temp.innerText))
    Temp.innerText = newValue;
  })
}

function ConvertCeltoFa(temp) {
  return  ((temp - 32)/1.8).toFixed(2)
}

function ConvertFatoCel(temp) {
  return  ((temp * 1.8) + 32).toFixed(2);
}
