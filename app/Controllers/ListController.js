import _listService from "../Services/ListService.js";
import _store from "../store.js"
import Item from "../Models/Item.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let templete = ''
  let lists = _store.State.lists

  lists.forEach(list => templete += list.Templete);
  document.getElementById("task-card").innerHTML = templete
}


// ANCHOR fix this draw/fix this templete
function _drawItems(){
  let templete = ''
  let items = _store.State.items

  items.forEach(item => templete += item.Templete)
  document.getElementById("item-elem").innerHTML = templete
}



//Public
export default class ListController {
  
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
    _drawItems()
    console.log('controller');
    
  }

  createTask(event){
    event.preventDefault()
    let formData = event.target 
    let newList = {
      title: formData.listName.value 
    }
    _listService.createTask(newList)
    _drawLists()
    _drawItems()
    formData.reset()
  }

  createItems(event, listId){
    event.preventDefault()
    let formData = event.target 
    let newItemData = {
      title: formData.itemName.value
    }
    _listService.createItems(newItemData, listId)
    _drawLists()
    _drawItems()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
