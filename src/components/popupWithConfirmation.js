import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, loadingText) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._confirmButton = this._popupForm.querySelector(
      ".modal__confirm-button"
    );
    this._confirmButtonText = this._confirmButton.textContent;
    this._loadingText = loadingText;
  }

  setConfirmAction(callBack) {
    this._handleFormSubmit = callBack;
  }

  showLoading() {
    this._confirmButton.textContent = this._loadingText;
  }

  hideLoading(originalText) {
    this._confirmButton.textContent = originalText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", () => {
      if (this._handleFormSubmit) {
        this._handleFormSubmit();
      }
    });
  }
}
