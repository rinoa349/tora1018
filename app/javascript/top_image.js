const stopBtn = document.getElementById('stopBtn')
const startBtn = document.getElementById('startBtn')
const sliders = document.querySelectorAll('.slide-wrapper')
stopBtn.addEventListener('click', function() {
   sliders.forEach( function(slider){
      slider.style.animation = 'none';
});
}, false);
startBtn.addEventListener('click', function() {
   sliders.forEach( function(slider){
      slider.style.animation = 'slide-flow 20s infinite linear 1s both';
});
}, false);