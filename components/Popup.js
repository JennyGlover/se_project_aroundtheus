export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open(popup) {
    popup.classList.add("modal_open");
  }

  close(popup) {
    popup.classList.remove("modal_open");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      const openedModal = document.querySelector(".modal_opened");
      this.close(openedModal);
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector(".modal__close-button");
    closeButton.addEventListener("click", () => {
      this.close(this._popup);
    });
  }
}
