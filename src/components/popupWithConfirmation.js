import Popup from "./Popup.js";

export default class popupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector(".modal__container");
    this._confirmButton = this._popupForm.querySelector(
      ".modal__confirm-button"
    );
    this._confirmButtonText = this._confirmButton.textContent;
  }

  close() {
    super.close();
    this._popupForm.removeEventListener("submit", this._handleFormSubmit);
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (typeof this._confirmAction === "function") {
      this._confirmAction();
    }
  };

  setConfirmAction(action) {
    this._confirmAction = action;
  }

  setLoading(isLoading, loadingText = "Deleting...") {
    if (isLoading) {
      this._confirmButtonText = loadingText;
    } else {
      this._confirmButtonText = this._confirmButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleFormSubmit);
  }
}
