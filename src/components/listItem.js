const ListItem = ({id, listItems, setListItems}) => {

  const doneTodoStyle = {
    textDecoration: "line-through"
  }

  const todoStyle = {
    width: '30em',
    display: 'flex',
    justifyContent: 'center',
    margin: '25px',
    alignItems: 'center',
    marginTop: '2em',
    boxShadow: '2px 2px 2px'
  }

  const buttonStyle = {
    margin: '15px',
    float: 'right',
  }

  const listItem = listItems[id];

  const markAsDone = () => {
    setListItems({
      ...listItems,
      [id]: {
        ...listItem,
        isDone: true
      }
    });
  }

  if (!listItems[id].isDone) {
    return (
      <div style={todoStyle}>
        <span>{listItems[id].value}</span>
        <button style={buttonStyle} onClick={markAsDone}>done</button>
      </div>
    );
  } else {
    return (
      <div style={doneTodoStyle}>
        {listItems[id].value}
      </div>
    );
  }
  
}

export default ListItem;