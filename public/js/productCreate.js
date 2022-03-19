window.addEventListener("load", function () {

    let campoPrecio = document.querySelector(".inputPrecio");  
   
    campoPrecio.addEventListener("keydown" ,function () {

        let precioValor = campoPrecio.value.trim();    

    if(precioValor.length < 2)   {      
        campoPrecio.classList.add("errores")
        campoPrecio.classList.remove("correcto")
    } else {        
        campoPrecio.classList.add("correcto")
    }

})

     
  
})