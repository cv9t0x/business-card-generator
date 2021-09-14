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
const menu = new Menu(document.querySelector('.menu'));

applyBtn.addEventListener('click', () => {
	menu.collectAllData();

	if (!menu.config) {
		alert('Fill all the input fields');
		return;
	}

	new Card(document.querySelector('.card'), menu.config).create();
});
