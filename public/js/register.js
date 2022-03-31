window.onload = function () {

   const registerForm = document.querySelector("#formu")
   const campoNombre = document.querySelector("#nombre")
   const campoApellido = document.querySelector("#Apellido")
   const campoEmail = document.querySelector("#Email")
   const campoPassword = document.querySelector("#password")
   const campoPassword2 = document.querySelector("#password2")
   const inputs = document.querySelectorAll(".continputs")

   const validacionesinputs = () => {

      //CAMPO NOMBRE
      let campoNombreValido = campoNombre.value.trim();

      if (campoNombreValido.length < 4) {
         campoNombre.classList.add("error")
         campoNombre.classList.remove("success")
      }
      let regex = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/

      if (!regex.test(campoNombreValido)) {
         campoNombre.classList.add("error")
         campoNombre.classList.remove("success")

      } else {
         campoNombre.classList.add("success")
      }

      //CAMPO APELLIDO           
      let campoApellidoValido = campoApellido.value.trim();

      if (campoApellidoValido.length < 4) {
         campoApellido.classList.add("error")
         campoApellido.classList.remove("success")
      }

      let regexs = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/

      if (!regexs.test(campoApellidoValido)) {
         campoApellido.classList.add("error")
         campoApellido.classList.remove("success")

      } else {
         campoApellido.classList.add("success")
      }

      //CAMPO EMAIL
      let campoEmailValido = campoEmail.value.trim();

      if (campoEmailValido.length < 1) {
         campoEmail.classList.add("error")
         campoEmail.classList.remove("success")
      }
      let regexx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

      if (!regexx.test(campoEmailValido)) {
         campoEmail.classList.add("error")
         campoEmail.classList.remove("success")

      } else {
         campoEmail.classList.add("success")
      }

      //CAMPO PASSWORD      
      let campoPasswordValido = campoPassword.value.trim();

      if (campoPasswordValido.length < 3) {
         campoPassword.classList.add("error")
         campoPassword.classList.remove("danger")
      }
      if (campoPasswordValido.length >= 3 && campoPasswordValido.length <= 6) {
         campoPassword.classList.add("danger")
         campoPassword.classList.remove("error")
      }

      if (campoPasswordValido.length > 6) {
         campoPassword.classList.add("success")
         campoPassword.classList.remove("danger")
      }


      let regext = /^.(?=.{6,})(?=.[a-zA-Z0-9-.]).*$/
      if (!regext.test(campoPasswordValido)) {
         campoPassword.classList.add("error")
         campoPassword.classList.remove("success")

      } else {
         campoPassword.classList.add("success")
      }

      //CAMPO PASSWORD 2 match de passwords y length      
      let campoPassword2Valido = campoPassword2.value.trim();


      if ((campoPassword2Valido == 0) || (campoPasswordValido != campoPassword2Valido)) {
         campoPassword2.classList.add("error")
         campoPassword2.classList.remove("success")
      } else {
         campoPassword2.classList.add("success")

      }
   }
   inputs.forEach((item) => {
      item.addEventListener("keypress", validacionesinputs)
      item.addEventListener("click", validacionesinputs)
      item.addEventListener("blur", validacionesinputs)
   })







}