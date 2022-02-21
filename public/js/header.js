window.addEventListener('load', () => {

let navHamburguesa = document.querySelector('.contenedorelementos2')
let navMenu = document.querySelector('headerEnlaces')

navHamburguesa.addEventListener('click', function() {

    navMenu.classList.toggle('nav-menu_visible')
})

})