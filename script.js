const button1 = document.getElementById('button1');
let audio1 = new audio();
audio1.src = 'spell.wav';

button1.addEventListener('click', function(){
    audio1.play();
})