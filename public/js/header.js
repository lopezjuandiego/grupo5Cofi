window.addEventListener('load', function() {

let navHamburguesa = document.querySelector('.fa-bars')

let navMenu = document.querySelector('.headerEnlaces')
 
    
 navHamburguesa.addEventListener('click', function() {

    
    navMenu.classList.toggle('nav-li')
})

})