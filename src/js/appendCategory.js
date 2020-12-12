//import categoryHbs from '../templates/category.hbs'
//Шаблон закоментований, він поки не працює і збиває компіляцію. 
//Напиши функціонал з карткою Юри і розкоментуй

const appendCategory = () => {
    document.querySelector('.category-list').insertAdjacentHTML('afterbegin', categoryHbs());
};

appendCategory();