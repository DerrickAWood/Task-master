import _listService from "../Services/ListService.js";
import _store from "../store.js"
import _item from "../Models/Item.js"
import _list from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let templete = ''
  let lists = _store.State.lists

  lists.forEach(list => templete += list.Templete);
  document.getElementById("task-card").innerHTML = templete
}




//Public
export default class ListController {
  
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
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
    formData.reset()
  }

  createItems(event, listId){;
    console.log(listId)
    event.preventDefault()
    let formData = event.target 
    let newItemData = {
      title: formData.itemName.value
    }
    _listService.createItems(newItemData, listId)  
    _drawLists()
    
  }


  delete(listId){ 
    console.log(listId)
    _listService.delete(listId)
    _drawLists()
  }

  deleteItem(listId, itemId){
    console.log(itemId)
    _listService.deleteItem(listId ,itemId)
    _drawLists()
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
