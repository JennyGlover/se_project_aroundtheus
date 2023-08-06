class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  createCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  deleteCard() {
    return fetch(`${this._baseUrl}/cards/:cardId`, {
      method: "DELETE",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  likeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "PUT",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  unlikeCard() {
    return fetch(`${this._baseUrl}/cards/:cardId/likes`, {
      method: "DELETE",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }

  updateUserAvatar() {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((result) => {
        console.log(result);
        alert("success");
      })
      .catch((err) => {
        console.log("Oh no there was an error: ", err);
      })
      .finally(() => {
        console("ok we are done");
      });
  }
}
