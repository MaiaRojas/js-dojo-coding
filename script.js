const myVideo = document.getElementById("video1"); 

function play(element) {
  myVideo.play()
  // myVideo.muted = false;
  // alert("mouseover");    
}
  
function pause(element) {
  myVideo.pause()
  // myVideo.muted = true;
  // alert("mouseout");    
}

function temp(element){
  const element = document.getElementById(temps);
  var red1 = document.querySelector("#red-1");
  var red2 = document.querySelector("#red-2");
  var red3 = document.querySelector("#red-3");
  var red4 = document.querySelector("#red-4");
  var blue1 = document.querySelector("#blue-1");
  var blue2 = document.querySelector("#blue-2");
  var blue3 = document.querySelector("#blue-3");
  var blue4 = document.querySelector("#blue-4");

  console.log('Debug' , element)

  if (element.value = "°C"){
      red1.innerHTML = "24°";
      red2.innerHTML = "27°";
      red3.innerHTML = "21°";
      red4.innerHTML = "26°";
      blue1.innerHTML = "18°";
      blue2.innerHTML = "19°";
      blue3.innerHTML = "16°";
      blue4.innerHTML = "21°";
  }
  if (element.value = "°F"){
      red1.innerHTML = "75°";
      red2.innerHTML = "80°";
      red3.innerHTML = "69°";
      red4.innerHTML = "78°";
      blue1.innerHTML = "65°";
      blue2.innerHTML = "66°";
      blue3.innerHTML = "61°";
      blue4.innerHTML = "70°";
  }
  if (element.value = "°K"){
      red1.innerHTML = "297.15°";
      red2.innerHTML = "300.15°";
      red3.innerHTML = "294.15°";
      red4.innerHTML = "299.15°";
      blue1.innerHTML = "291.15°";
      blue2.innerHTML = "292.15°";
      blue3.innerHTML = "289.15°";
      blue4.innerHTML = "294.15°";
  }
}