import searchInputHbs from '../templates/searchInput.hbs'

const appendSearchInput = () => {
    document.querySelector('.search').insertAdjacentHTML('afterbegin',searchInputHbs());
};

const SearchButtonRef = document.querySelector('.search_button');
SearchButtonRef.addEventListener('click', appendSearchInput);
//  appendSearchInput();