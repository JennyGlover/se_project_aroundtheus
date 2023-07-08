export default class Section {
  constructor({ items, renderer }, cardElements) {
    this._items = items;
    this._renderer = renderer;
    this._cardElements = document.querySelector(cardElements);
  }

  renderItems() {
    this.items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._cardElements.append(element);
  }
}
