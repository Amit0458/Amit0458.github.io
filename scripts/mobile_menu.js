let hamBurger = document.querySelector('.hamburger');
let nav = document.querySelector('#nav-menu');
let hmAfterClick = document.querySelector('.hamburger_After');

hamBurger.addEventListener('click', () => {
    hmAfterClick.classList.toggle('HmafterClick');
})