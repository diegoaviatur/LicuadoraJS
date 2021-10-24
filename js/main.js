var estadoLicuadora = "apagada";
var buttonSound = document.getElementById("blender-button-sound");
var blenderSound = document.getElementById("blender-sound");
var licuadora = document.getElementById("blender");
function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendida";
    blenderSoundActive();
    licuadora.classList.add("active");
    /* console.log("Me prendiste"); */
  } else {
    estadoLicuadora = "apagada";
    blenderSoundActive();
    licuadora.classList.remove('active');
    /* console.log("Me apagaste"); */
  }
}

function blenderSoundActive() {
    if(blenderSound.paused){
        buttonSound.play();
        blenderSound.play();
    }else{
        buttonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}

