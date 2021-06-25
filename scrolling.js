const navSlide = () => {
    const mobile_menu = document.querySelector('.mobile_menu');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');
    mobile_menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    })
}
navSlide();