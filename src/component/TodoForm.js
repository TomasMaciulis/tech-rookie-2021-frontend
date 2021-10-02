import { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
  const [formInput, setFormInput] = useState({value: ''});

  const handleChange = (event) => {
    setFormInput({value: event.target.value});
  }

  const handleSubmit = (event) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        value: formInput.value,
        isDone: false,
        isDeleted: false,
        updatedAt: Date.now(),
      }
    ]);

    setFormInput({value: ''});

    event.preventDefault();
  }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={formInput.value} onChange={handleChange} />
        <input type="submit" value="Add" />
      </form>
    )
}

export default TodoForm;