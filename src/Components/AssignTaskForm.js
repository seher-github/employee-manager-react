// AssignTaskForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AssignTaskForm = () => {
  const [task, setTask] = useState({
    employeeName: '',
    taskDescription: '',
    deadline: '',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task assigned:', task);
    // Reset form after submission
    setTask({ employeeName: '', taskDescription: '', deadline: '' });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '500px',
        margin: 'auto',
        backgroundColor: '#9b0000', // Dark red background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: '#ffffff', // White text color
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#ffffff', fontWeight: 'bold' }}>
        Assign Task to Employee
      </Typography>
      <TextField
        label="Employee Name"
        name="employeeName"
        variant="filled"
        value={task.employeeName}
        onChange={handleChange}
        required
        InputProps={{
          sx: {
            backgroundColor: '#ffffff', // White background for text field
            borderRadius: '4px',
          },
        }}
        InputLabelProps={{
          sx: { color: '#9b0000' }, // Dark red label color
        }}
      />
      <TextField
        label="Task Description"
        name="taskDescription"
        variant="filled"
        value={task.taskDescription}
        onChange={handleChange}
        multiline
        rows={4}
        required
        InputProps={{
          sx: {
            backgroundColor: '#ffffff',
            borderRadius: '4px',
          },
        }}
        InputLabelProps={{
          sx: { color: '#9b0000' },
        }}
      />
      <TextField
        label="Deadline"
        name="deadline"
        variant="filled"
        type="date"
        value={task.deadline}
        onChange={handleChange}
        InputLabelProps={{ shrink: true, sx: { color: '#9b0000' } }}
        InputProps={{
          sx: {
            backgroundColor: '#ffffff',
            borderRadius: '4px',
          },
        }}
        required
      />
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#ffffff', color: '#9b0000', fontWeight: 'bold' }}>
        Assign Task
      </Button>
    </Box>
  );
};

export default AssignTaskForm;
