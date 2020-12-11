import './sass/normalize.css';
import './sass/reset.css';
import './sass/main.scss';

import appendHeader from './js/appendHeader.js';
import appendSearchInput from './js/appendSearchInput.js';
import appendCallCards from './js/appendCallCards.js';
import appendFooter from './js/appendFooter.js';
import appendAuthorization from './js/appendAuthorization.js';

import './js/button.js'; //назва кнопки має бути [призначення]Btn, наприклад, loginBtn



//Об'єкт реєстрації
import FetchRegistraion from './js/server/auth/fetchRegistration.js';
const fetchRegistration = new FetchRegistraion(
    {
        email: "react1243@goit.com",
        password: "qwerty1",
    }
);
console.log('FetchRegistraion працює', fetchRegistration.registrationReguest());


//Об'єкт отримання списку категорій - ok
import FetchCategoriesList from './js/server/FetchCategoriesList.js';
const fetchCategoriesList = new FetchCategoriesList();
console.log('FetchCategoriesList', fetchCategoriesList.fetchCategoriesListReguest());
