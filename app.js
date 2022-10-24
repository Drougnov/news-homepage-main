const toggleMenu = document.querySelector('.nav__menu');
const nav = document.querySelector('nav');

toggleMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');
})