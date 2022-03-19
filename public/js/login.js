window.onload = function() {
    
    const loginForm = document.forms.login;
    const fieldEmail = loginForm.email;
    const fieldPassword = loginForm.password;



        fieldEmail.addEventListener ("keydown",  (e) =>{
           
           // fieldEmail.classList.remove ("error");
           // fieldEmail.classList.remove ("success");
             //fieldEmail.classList.add ("focus");
          
           let emailValido = fieldEmail.value.trim()

            if (emailValido.length < 3 ){
                fieldEmail.classList.add ("error")
                fieldEmail.classList.remove ("success")
               }

            let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            
            if (!regex.test(emailValido)){
                fieldEmail.classList.add ("error")
                fieldEmail.classList.remove("success")
               
        } else{ 
            fieldEmail.classList.add ("success")

        } 
       
      /*  loginForm.addEventListener ("submit", function (e){
            e.preventDefault()
           
     })*/

    fieldPassword.addEventListener ("keydown",  (e) =>{
        fieldPassword.classList.remove ("error");
        fieldPassword.classList.remove ("success");
        fieldPassword.classList.add ("focus");
        let value = e.target.value
       // console.log(value);
        if (value.length < 1 ){
            fieldPassword.classList.add ("error")
        }
        let regex = /^.{6,50}$/
        if (!regex.test(value)){
            fieldPassword.classList.add ("error")
           
       
    } else{ 
        fieldPassword.classList.add ("success")
    }

    
})
 
})
} 


