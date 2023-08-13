export default class Card {
  constructor(
    cardData,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleCardLike
  ) {
    this.isLiked = cardData.isLiked;
    this._name = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardLike = handleCardLike;

    //getting the card view
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeIconElement = this._cardElement.querySelector(".card__like-icon");
    this._trashButtonElement = this._cardElement.querySelector(".card__trash");
    this._imageElement = this._cardElement.querySelector(".card__image");
  }

  _setEventListeners() {
    //card like button
    this._likeIconElement.addEventListener("click", (e) => {
      e.preventDefault();
      this._handleCardLike();
    });

    //delete button
    this._trashButtonElement.addEventListener("click", () => {
      this._handleDeleteClick();
    });

    //opening display
    this._imageElement.addEventListener("click", (e) => {
      e.preventDefault();
      this._handleOpenDisplay();
    });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeIcon() {
    if (this.isLiked) {
      this._likeIconElement.classList.add("card__like-icon_active");
    } else {
      this._likeIconElement.classList.remove("card__like-icon_active");
    }
  }

  showLikes(isLiked) {
    this.isLiked = isLiked;
    this._handleLikeIcon();
  }

  _handleOpenDisplay() {
    this._handleCardClick(this._link, this._name);
  }

  deleteCardElement() {
    this._handleDeleteCard();
  }

  getView() {
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
