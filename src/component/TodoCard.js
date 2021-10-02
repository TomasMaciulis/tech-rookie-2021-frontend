const TodoCard = ({ todo, todos, setTodos }) => {
  console.log(todos);

  const handleDone = () => {
    todos[todo.id] = {
      ...todo,
      isDone: true,
      updatedAt: Date.now(),
    }

    setTodos([...todos])
  }
  
  const handleRestore = () => {
    todos[todo.id] = {
      ...todo,
      isDone: false,
      updatedAt: Date.now(),
    }

    setTodos([...todos])
  }

  const handleDelete = () => {
    todos[todo.id] = {
      ...todo,
      isDeleted: true,
      updatedAt: Date.now(),
    }

    setTodos([...todos])
  }


  return (
    <div>
      <span>{todo.value}</span>
      {!todo.isDone &&
        <button onClick={handleDone}>Done</button>
      }
      {todo.isDone && 
        <button onClick={handleRestore}>Restore</button>
      }
      {!todo.isDeleted &&
        <button onClick={handleDelete}>Delete</button>
      }
    </div>
  );
}

export default TodoCard;