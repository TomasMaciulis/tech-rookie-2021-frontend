import { Box } from '@mui/system';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useStickyState from './hooks/useStickyState';

function App() {
  const [todos, setTodos] = useStickyState([]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="15px"
    >
      <Box 
        width="50%"
      >
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Box>
    </Box>
  );
}

export default App;
