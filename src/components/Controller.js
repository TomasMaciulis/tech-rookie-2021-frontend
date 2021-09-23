const Controller = ({listItems, setListItems, todoInput, setTodoInput}) => {

  const id = Object.keys(listItems).length;

  const addRecord = () => {
    
    setListItems({
      ...listItems,
      [id]: {
        'value': todoInput,
        'isDone': false, 
      }
    });
  }

  const updateTodoInput = (input) => {
    setTodoInput(input.target.value);
  }

  return (
    <div class = "todoItem" id = {id}>
      <label>
        add a todo:
        <input type="text" name="todo" onChange = {updateTodoInput}/>
      </label>
      <button value="Submit" onClick = {addRecord}>
        add
      </button>
    </div>
  )
}

export default Controller;