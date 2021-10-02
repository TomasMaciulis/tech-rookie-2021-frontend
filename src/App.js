import { useState } from 'react';
import './App.css';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
