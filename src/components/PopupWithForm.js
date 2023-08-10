import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
    this._inputs = this._popupForm.querySelectorAll(".modal__input");
    this.saveButton = this._popupForm.querySelector(".modal__save-button");
    this._saveButtonText = this.saveButton.textContent;
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

  setLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._saveButtonText = loadingText;
    } else {
      this._saveButtonTextt = this._confirmButtonText;
    }
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
}
