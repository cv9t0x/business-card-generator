export default class Menu {
	constructor(menu) {
		this._menu = menu;
		this._config;

		menu.onclick = this.onClick.bind(this);
	}

	collectAllData() {
		this._config = {};
		const config = this._menu.querySelector('.config');
		const configItems = config.querySelectorAll('.config__item');

		for (let i = 0; i < configItems.length; i++) {
			const configItem = configItems[i];
			const input = configItem.querySelector('.config__input');

			if (this.checkDisplay(configItem)) continue;

			switch (this.checkInput(input)) {
				case 'required empty value':
					this.outlineEmptyInputs(configItems, i);
					this._config = null;
					return;
				case 'empty value':
					continue;
				case 'pass':
					break;
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
	}

	outlineEmptyInputs(arr, index) {
		for (let i = index; i < arr.length; i++) {
			const elem = arr[i];
			const input = elem.querySelector('.config__input');

			if (this.checkInput(input) == 'required empty value') {
				input.classList.add('empty-input');

				setTimeout(() => input.classList.remove('empty-input'), 3000);
			}
		}
	}

	collectOptionData(elements) {
		const value = Array.from(elements).filter((item) => item.checked)[0]
			?.value;

		return value;
	}

	checkInput(elem) {
		if (elem.value === '' || elem.value === null) {
			if (elem.required) {
				return 'required empty value';
			}
			return 'empty value';
		}
		return 'pass';
	}

	checkDisplay(elem) {
		const displayBtn = elem.querySelector('.display__btn');

		return displayBtn && !displayBtn.checked ? true : false;
	}

	displayRequiredInput(item) {
		item.closest('.config__item')
			.querySelector('.config__label')
			.classList.toggle('required');
	}

	onClick(event) {
		if (event.target.classList.contains('display__btn')) {
			this.displayRequiredInput(event.target);
		}
	}

	get config() {
		if (this._config) {
			return this._config;
		}
		return null;
	}
}
