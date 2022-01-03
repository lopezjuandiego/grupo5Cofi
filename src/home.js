const botonHambur = document.querySelector (".contenedorelementos2");
const enlaces = document.querySelector ("headerEnlaces"); 

botonHambur.addEventListener("click", () => {
enlaces.classList.toggle("headerEnlacesVisible"); 

})