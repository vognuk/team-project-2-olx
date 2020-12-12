import cardProductHbs from '../templates/cardProduct.hbs'

const appendCardProduct = () => {
    document.querySelector('.ad-modal').insertAdjacentHTML('afterbegin', cardProductHbs());
};

appendCardProduct();