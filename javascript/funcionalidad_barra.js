/*  innerHTML es una propieda que permite establecer el texto interno del elemento, para este caso es un boton  */
var mivideo, reproducir, barra, progreso, maximo;
maximo = 600;
/*
  Que distancia hay desde el borde izquierdo de la pagina hasta donde comienza la barra
 */
function comenzar() {
    mivideo    = document.getElementById("mivideo");
    reproducir = document.getElementById("reproducir");
    barra      = document.getElementById("barra");
    progreso   = document.getElementById("progreso");

    reproducir.addEventListener("click", clicando,false);
    barra.addEventListener("click", adelantando, false);
}

function clicando() {
    if  ( mivideo.paused === false  &&  mivideo.ended === false ) {
        mivideo.pause();
        reproducir.innerHTML = "Play";
    }else {
        mivideo.play();
        reproducir.innerHTML = "Pause";
         bucle = setInterval(estado,30);
    }
}

function estado() {
    if (mivideo.ended === false){
        let total = parseInt(mivideo.currentTime * maximo / mivideo.duration);
        progreso.style.width = total + "px";
    }
}
function adelantando(posicion){
    if (mivideo.paused === false && mivideo.ended === false){
        let ratonX = posicion.pageX - barra.offsetLeft;
        let nuevoTiempo = ratonX * mivideo.duration / maximo;
        mivideo.currentTime = nuevoTiempo;
        progreso.style.width = ratonX + "px";
    }
}

window.addEventListener("load", comenzar, false);