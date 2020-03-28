import { generateId } from "../utils.js"

export default class Item {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
  }
  get Templete(){
    return /*html*/`
    <dd>
    <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
    <span>&times;</span>
    </button>
    <h5>${this.title}</h5>
    </dd>
  `
}
}

