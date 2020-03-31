import { generateId } from "../utils.js";

export default class Item {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    this.items = [] || data.item.map(i => new Item(i))
  }
  getTemplete(listId){
    return /*html*/`
    <dd>
    <button type="button" class="close text-danger" onclick="app.listController.deleteItem('${listId}','${this.id}')">
    <span>&times;</span>
    </button>
    <h5>${this.title}</h5>
    </dd>
  `
}
}

