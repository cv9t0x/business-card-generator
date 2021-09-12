export default class AddPhone {
	constructor(addPhoneContainer, additionalPhoneInput) {
		this._addPhoneContainer = addPhoneContainer;
		this._additionalPhoneInput = additionalPhoneInput;
		this._relatedTarget;
		this._currentTarget;

		addPhoneContainer.onclick = this.onClick.bind(this);
	}

	onClick(event) {
		if (event.target.classList.contains('add-phone')) {
			this._relatedTarget = this._currentTarget;
			this._currentTarget = event.target;

			if (this._relatedTarget) {
				this._relatedTarget.classList.remove('none');
			}

			this._additionalPhoneInput.classList.toggle('none');
			this._currentTarget.classList.toggle('none');
		}
	}
}
