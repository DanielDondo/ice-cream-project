(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-buy-open]"),
        closeModalBtn: document.querySelector("[data-buy-close]"),
        modal: document.querySelector("[data-buy]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-tradition-open]"),
        closeModalBtn: document.querySelector("[data-tradition-close]"),
        modal: document.querySelector("[data-tradition]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-contacts-open]"),
        closeModalBtn: document.querySelector("[data-contacts-close]"),
        modal: document.querySelector("[data-contacts]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-franchise-open]"),
        closeModalBtn: document.querySelector("[data-franchise-close]"),
        modal: document.querySelector("[data-franchise]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-product-open]"),
        closeModalBtn: document.querySelector("[data-product-close]"),
        modal: document.querySelector("[data-product]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("modal-open");
    }
})();