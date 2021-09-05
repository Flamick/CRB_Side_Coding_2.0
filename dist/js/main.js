//* Hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if(!menuOpen) {
    menuBtn.classList.add('open');
    mobileMenu.classList.add('open');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    menuOpen = false;
}
});

//* Click events toggle ".item"
let itemOverlay = Array.from(document.querySelectorAll('.item'));

const clickEffect = (e) => {
    if(mediaDevice.matches) {
        e.preventDefault();
        clicked = document.querySelector('.item.clicked');
        const unclicked = document.querySelectorAll('.item');
        if(unclicked){
            e.currentTarget.classList.add('clicked');
            clicked.classList.remove('clicked');
        }
    }
}

itemOverlay.forEach(node => {
    node.addEventListener('click', clickEffect)
});

const mediaDevice = window.matchMedia('(max-width: 799px)');

//* Click events toggle ".process-icon"
let processIcon = Array.from(document.querySelectorAll('.process-icon'));

const iconClickEffect = (e) => {
    if(mediaDevice.matches) {
        e.preventDefault();
        clicked = document.querySelector('.process-icon.clicked');
        const unclicked = document.querySelectorAll('.process-icon');
        if(clicked){
            e.currentTarget.classList.remove('clicked');
        }   else if(unclicked) {
            e.currentTarget.classList.add('clicked');
        }
    }
}

processIcon.forEach(node => {
    node.addEventListener('click', iconClickEffect);
});

//* Recaptcha
window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
        el.setAttribute('required', 'required'); 
    } 
    }