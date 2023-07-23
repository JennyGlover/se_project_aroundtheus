import { openModal } from "../utils/utils.js";

export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._handleCardClick(this._link, this._name);
  }

  getView() {
    //getting the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    //Setting the img src and alt attributes
    const cardImage = this._cardElement.querySelector(".card__image");
    const cardTitle = this._cardElement.querySelector(".card__title");
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;
    //setting  event isteners,
    this._setEventListeners();

    //returning the card,
    return this._cardElement;
  }
}
