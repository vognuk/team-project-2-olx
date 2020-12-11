import authorizationHbs from '../templates/authorization.hbs'

const appendAuthorization = () => {
    document.querySelector('main').insertAdjacentHTML('beforeend', authorizationHbs());
};

appendAuthorization();