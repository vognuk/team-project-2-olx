import AuthModalTmpl from '../templates/authorization.hbs';

const openModalBtn = document.querySelector('.header_auth_button');
const closeModalBtn = document.querySelector('.auth-modal-close-button');
const authBackdropEl = document.querySelector('.auth-backdrop');
const authModalEl = document.querySelector('.auth-modal');
const authFormEl = document.querySelector('.authorization');

openModalBtn.addEventListener("click", renderAuthModal);

function renderAuthModal(form) {
    const markup = AuthModalTmpl(form)
    makeMarkup(markup);
    closeModalBtn.addEventListener("click", closeAuthModal)
}

    function makeMarkup(html) {
        authFormEl.insertAdjacentHTML('beforeend', html);
}

  
    function closeAuthModal(event) {
    event.preventDefault(),
    authBackdropEl.classList.add("is-hidden")
}