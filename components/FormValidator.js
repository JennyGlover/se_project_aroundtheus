export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this.validationConfig = {
      inputErrorClass: "modal__input_type_error",
      errorClass: "modal__input-error_active",
      inactiveButtonClass: "modal__save-button_inactive",
      formSelector: ".modal__container",
      inputSelector: ".modal__input",
      submitButtonSelector: ".modal__save-button",
      fieldsetSelector: ".modal__fieldset",
    };
  }

  //func to hide input error
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.validationConfig.errorClass);
  }

  //func to hide input error
  _hideInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.validationConfig.inputErrorClass);
    errorElement.classList.remove(errorMessage);
    errorElement.textContent = null;
  }

  //checking field validity
  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  //func to check if form has an invalid input
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  //func to toggle submit button
  toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this.validationConfig.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "true");
    } else {
      buttonElement.classList.remove(this.validationConfig.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

  //adding handlers
  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this.validationConfig.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this.validationConfig.submitButtonSelector
    );
    this.toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        this._checkInputValidity(formElement, inputElement);
        this.toggleButtonState(inputList, buttonElement);
      });
    });
  }
  //enable form validation

  enableValidation(validationConfig) {
    const formList = Array.from(
      document.querySelectorAll(this.validationConfig.formSelector)
    );
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  }
}
