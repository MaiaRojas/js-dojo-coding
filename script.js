const myVideo = document.getElementById("video1"); 

function play(element) {
  myVideo.play()
}
  
function pause(element) {
  myVideo.pause();
  myVideo.currentTime = 0;
}
