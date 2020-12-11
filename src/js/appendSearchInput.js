import searchInputHbs from '../templates/searchInput.hbs'


const appendSearchInput = () => {
    document.querySelector('.search').insertAdjacentHTML('afterbegin',searchInputHbs());
};

appendSearchInput();