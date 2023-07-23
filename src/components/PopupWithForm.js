import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputs = Array.from(
      this._popupForm.querySelectorAll(".modal__input")
    );
    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
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

  close() {
    this._popupForm.reset();
    super.close();
  }
}
