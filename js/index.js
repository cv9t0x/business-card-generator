import Menu from './modules/menu.js';
import Card from './modules/card.js';
import AddPhone from './modules/addPhone.js';

const addPhoneContainer = document.querySelector('.config__item--phone');
const additionalConfigItem = addPhoneContainer.querySelector(
	'.config__item--additional',
);

document.addEventListener('DOMContentLoaded', () => {
	new AddPhone(addPhoneContainer, additionalConfigItem);
});

const applyBtn = document.querySelector('.menu__btn');
const cardElem = document.querySelector('.card');
const menu = document.querySelector('.menu');

applyBtn.addEventListener('click', () => {
	console.log(new Menu(menu).collectAllData().getData());
});
