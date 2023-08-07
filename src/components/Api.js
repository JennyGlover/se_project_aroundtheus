export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // Card route methods
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
        return [];
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  createCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  deleteCard() {
    return fetch(`${this._baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  likeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  unlikeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  //User route methods

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  updateUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }

  updateUserAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console.log("ok we are done");
      });
  }
}
