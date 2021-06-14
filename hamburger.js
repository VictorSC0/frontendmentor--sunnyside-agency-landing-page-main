const burger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

burger.addEventListener('click', menuBurger);

function menuBurger() {
    if(mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
}
