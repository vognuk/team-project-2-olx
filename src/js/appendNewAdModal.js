import newAdHbs from '../templates/newAd.hbs'

const appendNewAdModal = () => {
    document.querySelector('.ad-modal').insertAdjacentHTML('afterbegin', newAdHbs());
};

appendNewAdModal();