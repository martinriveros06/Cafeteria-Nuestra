const header = document.querySelector('#site-header');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');
const year = document.querySelector('#current-year');

const closeMenu = () => {
    if (!navToggle || !mainNav) return;
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú');
    mainNav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
};

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';

        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
        mainNav.classList.toggle('is-open', !isOpen);
        document.body.classList.toggle('nav-open', !isOpen);
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 980) closeMenu();
    });
}

const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 16);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (year) {
    year.textContent = new Date().getFullYear();
}
