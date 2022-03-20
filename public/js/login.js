window.onload = function() {
    
    const loginForm = document.forms.login;
    const fieldEmail = loginForm.email;
    const fieldPassword = loginForm.password;
       
    fieldEmail.addEventListener ("keydown",  (e) =>{

        let emailValido = fieldEmail.value.trim();       
        
                if (emailValido.length < 4 ){
            fieldEmail.classList.add ("error")
            fieldEmail.classList.remove ("success")
            
        }
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

        if (!regex.test(emailValido)){

            fieldEmail.classList.add ("error")
            fieldEmail.classList.remove ("success")
        
    } else{ 
        fieldEmail.classList.add ("success")
        
    } 
    
    
 })
 fieldPassword.addEventListener ("keydown",  () =>{

    let passwordValido = fieldPassword.value.trim();

    console.log (passwordValido)

    if (passwordValido.length < 6 ){

        fieldPassword.classList.add ("error")
        fieldPassword.classList.remove ("success")
        
    }

    let regex = /^.(?=.{6,})(?=.[a-zA-Z0-9-.]).*$/

    if (!regex.test(passwordValido)){

        fieldPassword.classList.add ("error")
        fieldPassword.classList.remove ("success")
    
} else{ 
    fieldPassword.classList.add ("success")
    
    
} 


})



}          







    
            
               
        
               
    
                
    
    





    





















