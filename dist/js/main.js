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
    if(is_touch_enabled) {
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

//* Only if it matches screen size
const mediaDevice = window.matchMedia('(max-width: 1024px)');

//* Only if its touch screen
function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
    ( navigator.maxTouchPoints > 0 ) ||
    ( navigator.msMaxTouchPoints > 0 );
}

//* Click events toggle ".process-icon"
const processIcon = Array.from(document.querySelectorAll('.process-icon'));

//*If icons are clicked they open and close
const iconClickEffect = (e) => {
    if(is_touch_enabled) {
        e.preventDefault();

        const clicked = document.querySelector('.process-icon.clicked');
        const unclicked = document.querySelectorAll('.process-icon:not(.clicked)');
        let clickedTrue = false;

        if(unclicked) {
            e.currentTarget.classList.add('clicked');
            clickedTrue = true;
            console.log(clickedTrue);
        }
        if(clicked) {
            clicked.classList.remove('clicked');
            clickedTrue = false;
            console.log(clickedTrue);
        }
    }
}

processIcon.forEach(node => {
    node.addEventListener('click', iconClickEffect);
});

//* Remove .clicked when anything else is clicked
document.body.addEventListener('click', function(e) {
    var el = e.target;
    const clicked = document.querySelector('.process-icon.clicked');
    if(is_touch_enabled) {
        do{
            if(el.classList && el.classList.contains('clicked')) {
                return;
            }
        } while (el = el.parentNode);
        clicked.classList.remove('clicked');
    }
});



//* Recaptcha
window.onload = function() { 
    var el = document.getElementById('g-recaptcha-response'); 
    if (el) { 
        el.setAttribute('required', 'required'); 
    } 
    }