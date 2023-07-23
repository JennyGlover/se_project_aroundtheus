import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".modal__image-display");
    this._caption = this._popup.querySelector(".modal__paragraph");
  }

  open(imgUrl, caption) {
    this._popupImage.src = imgUrl;
    this._caption.textContent = caption;
    super.open();
  }
}
