import headerHbs from '../templates/header.hbs'


const appendHeader = () => {
    document.querySelector('header').insertAdjacentHTML('afterbegin',headerHbs());
};

appendHeader();