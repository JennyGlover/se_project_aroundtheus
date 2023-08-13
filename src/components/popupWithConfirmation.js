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

  close() {
    super.close();
  }

  //   _handleFormSubmit = () => {
  //     if (typeof this._confirmAction === "function") {
  //       this._confirmAction();
  //     }
  //   };

  setConfirmAction(callBack) {
    this._handleFormSubmit = callBack;
  }

  //   setLoading(isLoading, defaultText) {
  //     if (isLoading) {
  //       this._confirmButton.textContent = "Deleting...";
  //     } else {
  //       this._confirmButton.textContent = defaultText;
  //     }
  //   }

  showLoading() {
    this._confirmButton.textContent = this._loadingText;
  }

  hideLoading() {
    this._confirmButton.textContent = this._confirmButtonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (this._handleFormSubmit) {
        this._handleFormSubmit();
      }
    });
  }
}
