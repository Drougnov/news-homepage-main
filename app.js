const container = document.querySelector('.container');
const nav = document.querySelector('nav');
const toggleMenu = document.querySelector('.nav__menu');
const navLinks = document.querySelectorAll('.nav__list li a')

toggleMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');
    container.classList.toggle('active');
})

navLinks.forEach(link => {
    link.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
})