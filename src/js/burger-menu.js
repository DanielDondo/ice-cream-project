(() => {
    const iconMenu = document.querySelector('.header-burger__icon');
    const menuBody = document.querySelector('.header-burger__body');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle(`_lock`);
            iconMenu.classList.toggle(`_active`);
            menuBody.classList.toggle(`_active`);
        });
    }
    menuBody.addEventListener("click", function (e) {
        if (e.target.className == 'body-burger__link') {
            document.body.classList.toggle(`_lock`);
            iconMenu.classList.toggle(`_active`);
            menuBody.classList.toggle(`_active`);
        }
    });
})();

function backToTop() {
    let button = $('.back-to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
}
backToTop();