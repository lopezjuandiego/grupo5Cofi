const botonHambur = document.querySelector (".contenedorelementos2");
const enlaces = document.querySelector (".headerEnlaces,#lienlace,.enlaces"); 

botonHambur.addEventListener("click", () => {
enlaces.classList.toggle("headerEnlacesVisible"); 

})