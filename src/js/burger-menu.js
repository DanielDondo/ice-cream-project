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
})();
