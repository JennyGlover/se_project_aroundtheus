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

  createCards({ name, link }) {
    return this._apiRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }

  deleteCard(cardId) {
    return this._apiRequest(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  updateLikes(cardId, isLiked) {
    return this._apiRequest(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
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

  updateUserInfo(name, description) {
    return this._apiRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      }),
    });
  }

  updateUserAvatar(avatarUrl) {
    return this._apiRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    });
  }
}
