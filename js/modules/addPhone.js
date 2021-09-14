export default class AddPhone {
	constructor(addPhoneContainer, additionalConfigItem) {
		this._addPhoneContainer = addPhoneContainer;
		this._additionalConfigItem = additionalConfigItem;
		this._additionalPhoneInput =
			additionalConfigItem.querySelector('.config__input');
		this._relatedTarget;
		this._currentTarget;

		addPhoneContainer.onclick = this.onClick.bind(this);
	}

	add() {
		this._additionalConfigItem.classList.remove('none');

		this._additionalPhoneInput.setAttribute('required', true);

		this._currentTarget.classList.add('none');
	}

	remove() {
		this._additionalConfigItem.classList.add('none');

		this._additionalPhoneInput.removeAttribute('required');
		this._additionalPhoneInput.value = '';

		this._relatedTarget.classList.remove('none');
	}

	onClick(event) {
		const action = event.target.dataset.actionPhone;
		if (action) {
			this._relatedTarget = this._currentTarget;
			this._currentTarget = event.target;
			this[action]();
		}
	}
}
