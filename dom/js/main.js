// main.js
const buttonContainer = document.querySelector('.p-button__container');
const hamburger = document.querySelector('.p-hamburger');
const hamburgerIcon = document.querySelector('.p-hamburger__icon');
const xbuttonIcon = document.querySelector('.p-xbutton__icon');

buttonContainer.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
    xbuttonIcon.classList.toggle('active');
});