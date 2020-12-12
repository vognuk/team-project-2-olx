import footerHbs from '../templates/footer.hbs'


const appendFooter = () => {
    document.querySelector('footer').insertAdjacentHTML('afterbegin',footerHbs());
};

appendFooter();