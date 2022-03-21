window.onload = function (){

    const registerForm = document.querySelector ("#formu")
    const campoNombre = document.querySelector ("#nombre")
    const campoApellido = document.querySelector ("#Apellido")
    const campoEmail = document.querySelector ("#Email")
    const campoPassword = document.querySelector ("#password")
    const campoPassword2 = document.querySelector ("#password2")
    //const nombreYapellido = document.querySelectorAll(".nomYape")


    campoNombre.addEventListener ("keydown", () => {
        let campoNombreValido = campoNombre.value.trim();

        if (campoNombreValido.length < 3 ){
            campoNombre.classList.add ("error")
            campoNombre.classList.remove ("success")
     }
            let regex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/

        if (!regex.test(campoNombreValido)){
            campoNombre.classList.add ("error")
            campoNombre.classList.remove ("success")
        
    } else{ 
        campoNombre.classList.add ("success")
        
    } 

    })

    campoApellido.addEventListener ("keydown", () => {
        let campoApellidoValido = campoApellido.value.trim();

        if (campoApellidoValido.length < 3 ){
            campoApellido.classList.add ("error")
            campoApellido.classList.remove ("success")
     }
            let regex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/
        if (!regex.test(campoApellidoValido)){
            campoApellido.classList.add ("error")
            campoApellido.classList.remove ("success")
        
    } else{ 
        campoApellido.classList.add ("success")
        
    } 


    })

    campoEmail.addEventListener ("keydown", () => {
        let campoEmailValido = campoEmail.value.trim();

        if (campoEmailValido.length < 1 ){
            campoEmail.classList.add ("error")
            campoEmail.classList.remove ("success")
     }
            let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!regex.test(campoEmailValido)){
            campoEmail.classList.add ("error")
            campoEmail.classList.remove ("success")
        
    } else{ 
        campoEmail.classList.add ("success")
        
    } 


    })

    campoPassword.addEventListener ("keydown", () => {
        let campoPasswordValido = campoPassword.value.trim();

        if (campoPasswordValido.length < 6 ){
            campoPassword.classList.add ("error")
            campoPassword.classList.remove ("success")
     }
            let regex = /^.(?=.{6,})(?=.[a-zA-Z0-9-.]).*$/
        if (!regex.test(campoPasswordValido)){
            campoPassword.classList.add ("error")
            campoPassword.classList.remove ("success")
        
    } else{ 
        campoPassword.classList.add ("success")
        
    } 


    })

    campoPassword2.addEventListener ("keydown", () => {
        let campoPassword2Valido = campoPassword2.value.trim();

        if (campoPassword2Valido.length < 6 ){
            campoPassword2.classList.add ("error")
            campoPassword2.classList.remove ("success")
     }
            let regex = /^.(?=.{6,})(?=.[a-zA-Z0-9-.]).*$/
        if (!regex.test(campoPassword2Valido)){
            campoPassword2.classList.add ("error")
            campoPassword2.classList.remove ("success")
        
    } else{ 
        campoPassword2.classList.add ("success")
        
    } 


    })
















}