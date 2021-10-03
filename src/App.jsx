import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useStickyState from './hooks/useStickyState';

function App() {
  const [todos, setTodos] = useStickyState([]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
