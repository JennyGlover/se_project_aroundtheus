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
