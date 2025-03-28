document.addEventListener('DOMContentLoaded', ()=> {
  const navMenu = document.querySelector(".nav-menu") as HTMLUListElement | null
  const hamMenu = document.querySelector(".ham-menu") as HTMLDivElement | null
  const navLinks = document.querySelectorAll<HTMLLIElement>(".nav-link")

  // Ensuring elements existence
  if(!navMenu || !hamMenu) return;

  const toggleMenu = ()=> {
    hamMenu.classList.toggle("active")
    navMenu.classList.toggle("hide-menu")
    navMenu.classList.toggle("display-menu")
  }

  // Toggle menu on hamburger click
  hamMenu.addEventListener("click", toggleMenu)

  // Close menu when clicking a link
  navLinks.forEach((link)=> {
    link.addEventListener("click", ()=> {
      if(navMenu.classList.contains("display-menu")) {
        toggleMenu()
      }
    })
  })

})