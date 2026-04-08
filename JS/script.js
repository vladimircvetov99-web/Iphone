const btnMenu = document.querySelector('.btn__menu');
const menu = document.querySelector('.menu__list');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});