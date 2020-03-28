import { generateId } from "../utils.js"

export default class Item {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
  }
  get Templete(){
    return /*html*/ `
    <dd>
      <h5>${this.title}</h5>
    </dd>
    `
  }
}

