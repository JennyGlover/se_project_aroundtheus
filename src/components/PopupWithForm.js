import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, loadingText) {
    super(popupSelector, loadingText);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
    this.saveButton = this._popupForm.querySelector(".modal__save-button");
    this._loadingText = loadingText;
  }

  _getInputValues() {
    const inputs = {};
    this._inputs.forEach((input) => {
      inputs[input.name] = input.value;
    });

    return inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputs = this._getInputValues();
      this._handleFormSubmit(inputs);
      this.close();
    });
  }

  showLoading() {
    this.saveButton.textContent = this._loadingText;
  }

  hideLoading(originalText) {
    this.saveButton.textContent = originalText;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
