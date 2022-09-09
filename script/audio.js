var waves, audio, num, array, width, context, wave, myElements, analyser, src, height, button;


button = document.querySelector('.audio__play');

audio = document.querySelector('.audio__sound');

waves = document.querySelector('.audio__waves');


// ширина контейнера
let wavesWidth = Number(waves.clientWidth);
// ширина 1 столбца
width = 4;
// кол-во стобцов
num = wavesWidth/width;

array = new Uint8Array(num*2);





button.addEventListener('click', function () {
    if(!context){
        preparation();
    }
    if(audio.paused){
        audio.play();
        loop();
    }else{
        audio.pause();
    }
})

function preparation(){
    for(var i = 0 ; i < num ; i++){
        wave = document.createElement('div');
        wave.className = 'wave';
        wave.style.background = '#1D1F1D';
        console.log(width);
        wave.style.minWidth = width+'px';

        wave.style.marginRight = 0.1 + 'px';
        waves.appendChild(wave);
    }

    myElements = document.getElementsByClassName('wave');
    context = new AudioContext();
    analyser = context.createAnalyser();
    src = context.createMediaElementSource(audio);
    src.connect(analyser);
    analyser.connect(context.destination);
    loop();
}


// что-то среднее loop
function loop(){
    if(!audio.paused){
        window.requestAnimationFrame(loop);
    }
    
    analyser.getByteFrequencyData(array);

    for(var i = 0 ; i < num ; i++){
        height = array[i+32];
        // console.log(array);
        myElements[i].style.minHeight = height+'px';
        myElements[i].style.opacity = 0.008*height;
    }
}


addDurationOfSound(audio);
function addDurationOfSound(audio) {
    let audio__minute = document.querySelector('.audio__minute');
    audio.onloadedmetadata = (event) => {
        let duration = (audio.duration/60).toFixed(1);
        audio__minute.innerHTML = duration;
    };

   
}