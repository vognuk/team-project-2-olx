import callCardsHbs from '../templates/callCards.hbs'

const appendCallCards = () => {
    document.querySelector('main').insertAdjacentHTML('afterbegin', callCardsHbs());
};

appendCallCards();
