// Cronometro

const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const evento = "01 dec 2023"

function countDown(){
    const dataEvento = new Date(evento)
    const hoje = new Date()

    const segTotal = (dataEvento - hoje)/1000; 

    var day = Math.floor(segTotal / 60 / 60 / 24);
    var hours = Math.floor(segTotal / 60 / 60) % 24;
    var min = Math.floor(segTotal / 60) % 60;
    var seg = Math.floor(segTotal) % 60;
  
    dia.innerHTML = `${day} D`;
    hora.innerHTML = `${formatoTempo(hours)} H`
    minuto.innerHTML = `${formatoTempo(min)} M`
    segundo.innerHTML = `${formatoTempo(seg)} S`
}

function formatoTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
  }
  
  countDown();
  setInterval(countDown, 1000);

  //botão

  