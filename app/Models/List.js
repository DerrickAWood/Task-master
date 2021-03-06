import { generateId } from "../utils.js";
import Item from "./Item.js"
console.log('list');

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = data.title
    this.id = data.id || generateId();
    this.items = [] || data.items.map(i => new Item(i))
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you



  get Templete(){
    return /*html*/ `
    <div class="col-4 border border-warning rounded shadow bg-dark text-light mt-2">
    <h1>${this.title}</h1>
    <hr class="bg-light">
    <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button>
    <div>
    <h3>${this.item}</h3>
    </div>


    <form onsubmit="app.listController.createItems(event, '${this.id}')">
      <label for="itemName"></label>
      <input type="text" name="itemName" placeholder="Enter Task...">
      <button type="submit" class="btn btn-primary">+</button>

    </form>
    <dl>
      
    </dl>
    </div>
    </div>
    `
  }

  get item(){
    let templete = ''
    this.items.forEach(item => templete += item.getTemplete(this.id))
    return templete
  }
  
}
