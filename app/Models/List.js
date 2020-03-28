import { generateId } from "../utils.js";
import Item from "./Item.js"
console.log('list');

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    /** @type {Item[]} */
        this.items = []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you


  get Templete(){
    return /*html*/ `
    <div class="col-4 border border-warning rounded shadow bg-dark text-light mt-2">
      <h1>${this.title} <span> <button ></button></span></h1>
      <hr class="bg-light">
    <div>
    <h3></h3>


    <form onsubmit="app.listController.createItems(event)">
      <label for="itemName"></label>
      <input type="text" name="itemName" placeholder="Enter Task...">
      <button type="submit" class="btn btn-primary">+</button>

    </form>
      <h5 id="item-elem"></h5>
    <dl>
      ${this.items}
    </dl>
    </div>
    </div>
    `
  }

  get item(){
    let templete = ''
    // this.items.forEach(topping => templete += this.item.Templete)
    return templete
  }
  
}
