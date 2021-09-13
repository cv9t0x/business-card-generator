import AddPhoneBtn from './addPhoneBtn.js';

const addPhoneContainer = document.querySelector('.config__item--phone');
const additionalPhoneInput = addPhoneContainer.querySelector(
	'.config__item--additional',
);

new AddPhone(addPhoneContainer, additionalPhoneInput);
