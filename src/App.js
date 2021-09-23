import Controller from './components/Controller';
import ListItem from './components/listItem';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [listItems, setListItems] = useState({});

  const [todoInput, setTodoInput] = useState();

  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2em',
    flexDirection: 'column',
  }

  return (
    <div className="App" style={appStyle}>
      <Controller 
        listItems = {listItems}
        setListItems = {setListItems}
        todoInput = {todoInput}
        setTodoInput = {setTodoInput}
      />
      <div>
        {Object.keys(listItems).map( (id) => {
          return (
            <ListItem 
              id = {id}
              listItems = {listItems}
              setListItems = {setListItems}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
