import React, { useState } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const MarkTaskStatus = () => {
  const [tasks, setTasks] = useState([
    { name: 'Task 1', completed: false },
    { name: 'Task 2', completed: false },
    { name: 'Task 3', completed: false },
  ]);

  const toggleTaskStatus = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText
              primary={task.name}
              secondary={task.completed ? 'Completed' : 'Pending'}
            />
            <Button
              variant="contained"
              color={task.completed ? 'secondary' : 'primary'}
              onClick={() => toggleTaskStatus(index)}
            >
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MarkTaskStatus;
