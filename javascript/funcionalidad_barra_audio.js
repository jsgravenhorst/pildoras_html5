/*  innerHTML es una propieda que permite establecer el texto interno del elemento, para este caso es un boton  */
var miaudio, reproducir, barra, progreso, maximo;
maximo = 600;
/*
  Que distancia hay desde el borde izquierdo de la pagina hasta donde comienza la barra
 */
function comenzar() {
    miaudio    = document.getElementById("miaudio");
    reproducir = document.getElementById("play");
    barra      = document.getElementById("barra");
    progreso   = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando,false);
    barra.addEventListener("click", adelantando, false);
}

function clicando() {
    if  ( miaudio.paused === false  &&  miaudio.ended === false ) {
        miaudio.pause();
        reproducir.innerHTML = "Play";
    }else {
        miaudio.play();
        reproducir.innerHTML = "Pause";
        bucle = setInterval(estado,30);
    }
}

function estado() {
    if (miaudio.ended === false){
        let total = parseInt(miaudio.currentTime * maximo / miaudio.duration);
        progreso.style.width = total + "px";
    }
}
function adelantando(posicion){
    if (miaudio.paused === false && miaudio.ended === false){
        let ratonX = posicion.pageX - barra.offsetLeft;
        let nuevoTiempo = ratonX * miaudio.duration / maximo;
        miaudio.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + "px";
    }
}

window.addEventListener("load", comenzar, false);