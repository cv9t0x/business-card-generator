export default class Menu {
	constructor(menu) {
		this._menu = menu;
		this._config;
	}

	collectAllData() {
		const config = this._menu.querySelector('.config');
		const configItems = config.querySelectorAll('.config__item');
		this._config = {};

		for (let configItem of configItems) {
			const input = configItem.querySelector('.config__input');

			if (this.checkDisplay(configItem)) continue;

			if (input.value === '' || input.value === null) {
				if (input.required) {
					this._config = null;
					return this;
				}
				continue;
			}

			this._config[input.name] = {};

			const options = {
				value: input.value,
				align: this.collectOptionData(
					configItem.querySelectorAll('.align__btn'),
				),
				fontSize: this.collectOptionData(
					configItem.querySelectorAll('.font-size__btn'),
				),
				color: this.collectOptionData(
					configItem.querySelectorAll('.color__btn'),
				),
			};

			Object.entries(options).map(([key, value]) => {
				if (value) {
					this._config[input.name][key] = value;
				}
			});
		}

		return this;
	}

	collectOptionData(elements) {
		const value = Array.from(elements).filter((item) => item.checked)[0]
			?.value;

		return value;
	}

	checkDisplay(elem) {
		const displayBtn = elem.querySelector('.display__btn');

		return displayBtn && !displayBtn.checked ? true : false;
	}

	getData() {
		if (this._config) {
			return this._config;
		}
		alert('Fill all the input fields');
	}
}
