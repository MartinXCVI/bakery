const navMenu = document.querySelector('.nav-menu')
const hamMenu = document.querySelector('.ham-menu')
const navLinks = document.querySelectorAll('.nav-link')

  hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active')
    navMenu.classList.toggle('hide-menu')
    navMenu.classList.toggle('display-menu')
  })

  navLinks.forEach( link => link.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active')
    navMenu.classList.toggle('display-menu')
    navMenu.classList.toggle('hide-menu')
  }))