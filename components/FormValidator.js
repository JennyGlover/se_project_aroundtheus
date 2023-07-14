export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  //func to hide input error
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  //func to hide input error
  _hideInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(errorMessage);
    errorElement.textContent = null;
  }

  //checking field validity
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //func to check if form has an invalid input
  _hasInvalidInput(inputList) {
    if (!inputList) {
      return false;
    }
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  //func to toggle submit button
  toggleButtonState() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

  //adding handlers
  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.queryelectorAll(this.settings.inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    this.toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }
  //enable form validation

  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
