export default class Card {
	constructor(elem, config) {
		this._elem = elem;
		this._config = config;
	}

	create() {
		let cardItems = this._elem.querySelectorAll('.card__item');

		this.fill(cardItems);
	}

	fill(elemArr) {
		for (let elem of elemArr) {
			let key = elem.dataset.name;
			let value = this._config[key]?.value;
			let align = this._config[key]?.align;
			let color = this._config[key]?.color;
			let fontSize = this._config[key]?.fontSize;

			if (value) {
				if (elem.classList.contains('none'))
					elem.classList.remove('none');

				elem.innerHTML = value;
			} else {
				if (!elem.classList.contains('none'))
					elem.classList.add('none');

				elem.innerHTML = '';
			}

			if (align) elem.style.textAlign = align;

			if (color) elem.style.color = color;

			if (fontSize) elem.style.fontSize = fontSize;
		}
	}
}
