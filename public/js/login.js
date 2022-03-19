window.onload = function() {
    
    const loginForm = document.forms.login;
    const fieldEmail = loginForm.email;
    const fieldPassword = loginForm.password;
    
    

    fieldEmail.addEventListener ("keydown",  (e) =>{
        let emailValido = fieldEmail.value.trim();
        

        
        if (emailValido.length < 1 ){
            fieldEmail.classList.add ("error")
            fieldEmail.classList.remove ("succes")
            
        }
        let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!regex.test(emailValido)){
            fieldEmail.classList.add ("error")
            fieldEmail.classList.remove ("succes")
        
    } else{ 
        fieldEmail.classList.add ("success")
        
    } 
    
    
 })
 fieldPassword.addEventListener ("keydown",  (e) =>{
    let passwordValido = fieldPassword.value.trim();
    

    
    if (passwordValido.length < 1 ){
        fieldPassword.classList.add ("error")
        fieldPassword.classList.remove ("succes")
        
    }
    let regex = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/
    if (!regex.test(passwordValido)){
        fieldPassword.classList.add ("error")
        fieldPassword.classList.remove ("succes")
    
} else{ 
    fieldPassword.classList.add ("success")
    
} 


})



}          







    
            
               
        
               
    
                
    
    





    





















 
