import List from "../Models/List.js";
import Item from "../Models/Item.js"
import _store from "../store.js"

//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

  createTask(newListData){
    let newList = new List(newListData)
    _store.State.lists.push(newList)
    console.log(_store.State.lists);
    _store.saveState()
  }
  
  createItems(newItemData, listId){
    let newItem = new Item(newItemData)
    let list = _store.State.lists.find(list => list.id == listId)
    // list.Item.push(newItem)
  }
}

console.log('service');


const SERVICE = new ListService();
export default SERVICE;
