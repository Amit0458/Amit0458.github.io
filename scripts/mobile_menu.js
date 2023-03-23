const hamBurger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_list_ul');
const cross = document.querySelector('.cross');

hamBurger.addEventListener('click', () => {
    nav.classList.toggle('nav_visibility');
    cross.classList.toggle('cross_visibility');
    hamBurger.classList.toggle('hamburger_visisibility');
    // console.log("here");
})
cross.addEventListener('click', () => {
    hamBurger.classList.toggle('hamburger_visisibility');
    nav.classList.toggle('nav_visibility');
    cross.classList.toggle('cross_visibility');
    // console.log("here");
})
window.onscroll = () => {
    if(cross.classList.contains("cross_visibility")) {
        console.log("yes");
        cross.classList.toggle('cross_visibility');
        hamBurger.classList.toggle('hamburger_visisibility');
        nav.classList.toggle('nav_visibility');
    }
};