//<<<---- Hamburger toggle ---->>>
const hamBurger = document.querySelector('#hamburger');
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-x');
const nav = document.querySelector('.nav_list_ul');

hamBurger.addEventListener('click', () => {
    cross.classList.toggle('cross_visibility');
    bars.classList.toggle('hamburger_visisibility');
    if(nav.classList.contains('nav_visibility')) {
        nav.classList.remove('nav_visibility');
    }else {
        nav.classList.add('nav_visibility');
    }
})


//<<<---- Day/Night toggle ---->>>
const toggle = document.querySelector('#toggle');
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon');
toggle.addEventListener('click', () => {
    sun.classList.toggle('sun_visibility');
    moon.classList.toggle('moon_visibility');
    if(document.body.classList.contains("light-mode")) {
        document.body.classList.remove('light-mode');
    }else {
        document.body.classList.add('light-mode');
    }
})

// Make the navigation bar sticky when scrolling
window.addEventListener("scroll", () => {
    const position = window.scrollY;
    const navMenu = document.querySelector("#nav-menu");
    if (position > 20) {
        navMenu.classList.add("sticky");
    } else {
        navMenu.classList.remove("sticky");
    }
});

