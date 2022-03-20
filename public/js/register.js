window.onload = function (){

    const registerForm = document.querySelector ("#formu")
    const campoNombre = document.querySelector ("#nombre")
    const campoApellido = document.querySelector ("#Apellido")
    const campoEmail = document.querySelector ("#Email")
    const campoPassword = document.querySelector ("#password")
    const campoPassword2 = document.querySelector ("#password2")


    campoNombre.addEventListener ("keydown", (e) => {
        let campoNombreValido = campoNombre.value.trim();

        if (campoNombreValido.length < 1 ){
            campoNombre.classList.add ("error")
            campoNombre.classList.remove ("succes")

            let regex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/

        if (!regex.test(campoNombreValido)){
            campoNombre.classList.add ("error")
            campoNombre.classList.remove ("succes")
        
    } else{ 
        campoNombre.classList.add ("success")
        
    } 



    }
    })

    campoApellido.addEventListener ("keydown", (e) => {
        let campoApellidoValido = campoApellido.value.trim();

        if (campoApellidoValido.length < 1 ){
            campoApellido.classList.add ("error")
            campoApellido.classList.remove ("succes")

            let regex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/
        if (!regex.test(campoApellidoValido)){
            campoApellido.classList.add ("error")
            campoApellido.classList.remove ("succes")
        
    } else{ 
        campoApellido.classList.add ("success")
        
    } 



    }
    })
















}