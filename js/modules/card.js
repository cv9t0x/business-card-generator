export default class Card {
	constructor({ elem, config }) {
		this._elem = elem;
		this._config = config;
	}

	create() {
		let cardItems = document.querySelectorAll('.card__item');

		this.fill(cardItems);
	}

	fill(arr) {
		let i = 0;
	}
}
