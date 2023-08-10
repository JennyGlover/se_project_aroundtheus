import Popup from "./Popup.js";

export default class popupWithConfirmation extends Popup {
  constructor(popupSlector, handleFormSubmit) {
    super(popupSlector);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._confirmButton = this._popupForm.querySelector(
      ".modal__confirm-button"
    );
    this._confirmButtonText = this._confirmButton.textContent;
  }

  close() {
    super.close();
  }

  setConfirmAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleFormSubmit);
  }
}
