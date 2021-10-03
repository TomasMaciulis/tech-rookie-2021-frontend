import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import { Paper, Grid, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';

const TodoCard = ({ todo, todos, setTodos }) => {
  const styles = {
    paper: {
      padding: 15,
      marginBottom: 15,
    },
    button: {
      delete: {
        text: 'right'
      }
    }
  };

  const handleDone = () => {
    todos[todo.id] = {
      ...todo,
      isDone: true,
      updatedAt: Date.now(),
    };

    setTodos([...todos]);
  };

  const handleRestore = () => {
    todos[todo.id] = {
      ...todo,
      isDone: false,
      updatedAt: Date.now(),
    };

    setTodos([...todos]);
  };

  const handleDelete = () => {
    todos[todo.id] = {
      ...todo,
      isDeleted: true,
      updatedAt: Date.now(),
    };

    setTodos([...todos]);
  };

  return (
    <Box>
      <Paper elevation={3} style={styles.paper}>
        <Grid container>
          <Grid item xs={1} hidden={todo.isDone}>
            <IconButton onClick={handleDone}>
              <CheckCircleOutlineIcon color="primary"/>
            </IconButton>
          </Grid>
          <Grid item xs={1} hidden={!todo.isDone}>
            <IconButton onClick={handleRestore}>
              <RestoreIcon color="primary"/>
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h6" gutterBottom component="div">
              {todo.value}
            </Typography>
          </Grid>
          <Grid item xs={1} textAlign={'right'}>
            <IconButton
              onClick={handleDelete}
              hidden={todo.isDeleted}
            >
              <DeleteIcon color="error"/>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TodoCard;
