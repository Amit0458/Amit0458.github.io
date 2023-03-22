let hamBurger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav_list_ul');
let cross = document.querySelector('.cross');

hamBurger.addEventListener('click', () => {
    nav.classList.toggle('nav_visibility');
    cross.classList.toggle('cross_visibility');
    hamBurger.classList.toggle('hamburger_visisibility');
    console.log("here");
})
cross.addEventListener('click', () => {
    hamBurger.classList.toggle('hamburger_visisibility');
    nav.classList.toggle('nav_visibility');
    cross.classList.toggle('cross_visibility');
    console.log("here");
})
// window.onscroll = () => {
//     nav.classList.remove('nav_visibility');
//     // cross.classList.remove('cross_visibility');
//     cross.classList.toggle('cross_visibility');
//     // navlist.classList.remove('open')
// };