import { openModal } from "../utils/utils.js";

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    //card like button
    this._cardElement
      .querySelector(".card__like-icon")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    //delete button
    this._cardElement
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    //opening display
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenDisplay();
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-icon")
      .classList.toggle("card__like-icon_active");
  }

  _handleOpenDisplay() {
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

  getview() {
    //getting the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    //setting  event isteners,
    this._setEventListeners();

    //returning the card,
    return this._cardElement;
  }
}
