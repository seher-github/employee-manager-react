// ManageEmployeesForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageEmployeesForm = () => {
  const [employee, setEmployee] = useState({ name: '', designation: '' });
  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleAddEmployee = () => {
    if (employee.name && employee.designation) {
      setEmployees([...employees, employee]);
      setEmployee({ name: '', designation: '' });
    }
  };

  const handleDeleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '500px',
        margin: 'auto',
        backgroundColor: '#9b0000',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        color: '#ffffff',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Manage Employees
      </Typography>
      <TextField
        label="Employee Name"
        name="name"
        variant="filled"
        value={employee.name}
        onChange={handleChange}
        required
        InputProps={{
          sx: {
            backgroundColor: '#ffffff',
            borderRadius: '4px',
          },
        }}
        InputLabelProps={{ sx: { color: '#9b0000' } }}
      />
      <TextField
        label="Designation"
        name="designation"
        variant="filled"
        value={employee.designation}
        onChange={handleChange}
        required
        InputProps={{
          sx: {
            backgroundColor: '#ffffff',
            borderRadius: '4px',
          },
        }}
        InputLabelProps={{ sx: { color: '#9b0000' } }}
      />
      <Button
        variant="contained"
        onClick={handleAddEmployee}
        sx={{ backgroundColor: '#ffffff', color: '#9b0000', fontWeight: 'bold' }}
      >
        Add Employee
      </Button>
      
      <List>
        {employees.map((emp, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteEmployee(index)}>
                <DeleteIcon sx={{ color: '#ffffff' }} />
              </IconButton>
            }
            sx={{
              backgroundColor: '#f0f0f0',
              marginBottom: '8px',
              borderRadius: '8px',
              color: '#9b0000',
            }}
          >
            <ListItemText
              primary={emp.name}
              secondary={emp.designation}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ManageEmployeesForm;
