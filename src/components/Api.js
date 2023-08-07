export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _handleApiResponses(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async _apiRequest(url, options) {
    return fetch(url, options).then(this._handleApiResponses);
  }

  // Card route methods
  getInitialCards() {
    return this._apiRequest(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  createCards() {
    return this._apiRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
    });
  }

  deleteCard() {
    return this._apiRequest(`${this._baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  likeCard() {
    return this._apiRequest(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  unlikeCard() {
    return this._apiRequest(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  //User route methods

  getUserInfo() {
    return this._apiRequest(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  updateUserInfo() {
    return this._apiRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
    });
  }

  updateUserAvatar() {
    return this._apiRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
    });
  }
}
