export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._inputs = this._form.querySelectorAll(this._inputSelector);
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }

    _showError = (input, errorMessageText) => {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = errorMessageText;
        errorMessage.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError = (input) => {
        const errorMessage = this._form.querySelector(`#${input.id}-error`);
        errorMessage.textContent = '';
        errorMessage.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _hasInvalidInput = () => {
        return Array.from(this._inputs).some((input) =>
            !input.validity.valid);
    }

    _toggleButtonError = () => {
        if (this._hasInvalidInput(this._inputs)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    _checkIfInputValid = (input) => {
        if (!input.validity.valid) {
            this._showError(input, input.validationMessage);
        } else {
            this._hideError(input)
        }
    }

    _setInputListeners = () => {
        this._toggleButtonError();

        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkIfInputValid(input);
                this._toggleButtonError();
            });
        });
    }

    enableValidation = () => {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        this._setInputListeners();
    }


}