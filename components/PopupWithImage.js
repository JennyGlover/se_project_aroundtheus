import Popup from Popup.js

export default class PopupWithImage extends Popup {
  constructor(popupSelector , {name, link}){
    super({ popupSelector, });
    this._popupImage = this._popupElement.querySelector(".display-modal");
    this._name = name;
    this._link = link;
  }

  open(){    
    super.open();

    const displayImage = this._link;
    const displayText = this._name;
    const displayAlt = this._name;
    document
      .querySelector(".modal__image-display")
      .setAttribute("src", displayImage);
    document.querySelector(".modal__paragraph").textContent = displayText;
    document
      .querySelector(".modal__image-display")
      .setAttribute("alt", displayAlt);
  }
}