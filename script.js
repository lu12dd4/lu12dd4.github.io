function mostrarAlerta() {
  alert("Este prototipo incluirá mejoras como visión artificial y aun mas compactas en futuras versiones.");

}

function enviarFormulario() {
  alert("¡Gracias por contactarte! Pronto recibirás una respuesta.");
  return false; // Prevenir envío real para demostración
}
function estado_version(){
  alert("Este proyecto esta en face de desarrollo,visite nuesta pagina de instagram ")
}
function tipeColorModeWhite(){
    var x;
    x++;
    
    if(x>1){
        x=0;
}
if(x==0){

}
}

document.getElementById("modoOscuroBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const secciones = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {//resaltado Dinamico
  let current = "";
  secciones.forEach(seccion => {
    const top = window.scrollY;
    const offset = seccion.offsetTop - 100;
    if (top >= offset) current = seccion.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});





