

const menu = document.getElementById('mobileMenu');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const navLinks = document.querySelectorAll('.nav-link');

function openMenu() {
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
}

function closeMenu() {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

navLinks.forEach(link => {
    link.addEventListener('click', e => {

        setTimeout(closeMenu, 300);
    });
});
