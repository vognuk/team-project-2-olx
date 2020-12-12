import searchInputHbs from '../templates/searchInput.hbs'



const appendSearchInput = () => {
    document.querySelector('.search').insertAdjacentHTML('afterbegin',searchInputHbs());
};
appendSearchInput();

const closeBtnSearchRef = document.querySelector('.search-button-close');
const backdropSearchRef = document.querySelector('.backdrop-search');
// const btnSearchInputRef = document.querySelector('.search_button');

// closeBtnSearchRef.addEventListener('click', onCloseSearchInput);
backdropSearchRef.addEventListener('click', onBackdropSearchClick);
btnSearchInputRef.addEventListener('click', onOpenSearchInput);

function onCloseSearchInput() {
    window.removeEventListener('keydown', onEscKeyPress);
    backdropSearchRef.classList.add('visually-hidden');
};

function onOpenSearchInput() {
    window.addEventListener('keydown', onEscKeyPress);
    backdropSearchRef.classList.remove('visually-hidden');
}
function onBackdropSearchClick(e) {
    if (e.currentTarget === e.target) {
       onCloseSearchInput() 
    }
}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        onCloseSearchInput()  
    }
}
// function onSearch(e) {
//     e.preventDefault();
//     clearResult();
//     imageApiService.searchQuery = refInput.value;
//     imageApiService.resetPage();
//     if (imageApiService.searchQuery === '') {
//         return alert('Введить запит для пошуку')
//     }

//     imageApiService.fetchPictures()
//         .then(renderImgCard)
//         .catch(onFetchError);
// }
// function clearResult() {
//         refs.cardContainer.innerHTML = '';
// }
// function onFetchError() {
//     alert('Щось пішло не так! ')
// }