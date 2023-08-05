class Api {
  constructor(options) {}

  getInitialCards() {}
}

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "6a1b8381-13d3-48b3-8e63-01f92df09884",
    "Content-Type": "application/json",
  },
});
