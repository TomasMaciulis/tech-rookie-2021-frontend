import { useState } from 'react';
import { AddCircle } from '@mui/icons-material';
import { Paper, Grid, IconButton, FormControl, TextField } from '@mui/material';

const TodoForm = ({ todos, setTodos }) => {
  const [formInput, setFormInput] = useState({ value: '' });

  const [button, setButton] = useState({ isDisabled: true });

  const styles = {
    button: {
      text: 'right',
      height: 45,
      width: 45,
    },
    textField: {
      height: 45,
    },
    paper: {
      padding: 15,
      marginBottom: 15,
    },
  };

  const updateButton = (isDisabled = true) => {
    setButton({
      ...button,
      isDisabled: isDisabled,
    });
  }

  const handleChange = (event) => {
    const value = event.target.value;

    setFormInput({
      ...formInput,
      value: value,
    });

    updateButton(value ? false : true);
  };

  const handleSubmit = (event) => {
    const value = event.target.value;

    setTodos([
      ...todos,
      {
        id: todos.length,
        value: formInput.value,
        isDone: false,
        isDeleted: false,
        updatedAt: Date.now(),
      },
    ]);

    setFormInput({ value: '' });
    updateButton(value ? false : true);


    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper style={styles.paper} elevation={3}>
        <FormControl fullWidth>
          <Grid container alignItems="flex-start">
            <Grid item xs={3} textAlign={'right'}>
              <IconButton
                type="submit"
                color="primary"
                disabled={button.isDisabled}
              >
                <AddCircle style={styles.button} />
              </IconButton>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="todo-input"
                label="New task"
                variant="outlined"
                onChange={handleChange}
                value={formInput.value}
                style={styles.textField}
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </form>
  );
};

export default TodoForm;
