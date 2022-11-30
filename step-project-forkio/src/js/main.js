const button = document.querySelector('.burger-menu-logo');
const burgerMenu = document.querySelector('.burger-menu');
const menuLogo = document.querySelector('.menu-icon');
const x = document.querySelector('.x');

function openMenu(){
    burgerMenu.classList.toggle('inactive');
    button.classList.toggle('inactive');
    x.classList.toggle('inactive');
}

button.addEventListener('click', openMenu);
x.addEventListener('click', openMenu);