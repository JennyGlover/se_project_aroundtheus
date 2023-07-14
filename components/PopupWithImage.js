import {Popup} from Popup.js

export default class PopupWithImage extends Popup {
  constructor({name, link}){
    super();
  }

  open(){
    const displayImage = this._link;
    const displayText = this._name;
    const displayAlt = this._name;

    openModal(document.querySelector(".display-modal"));
    document
      .querySelector(".modal__image-display")
      .setAttribute("src", displayImage);
    document.querySelector(".modal__paragraph").textContent = displayText;
    document
      .querySelector(".modal__image-display")
      .setAttribute("alt", displayAlt);
  }
}