(function() {
    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.header__menu .menu__list');
    const menuLinks = menu.querySelectorAll('.menu__link');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', () => {
            if(menu.classList.contains('active')) {
                menu.classList.remove('active');
            }
        });
    });
}());