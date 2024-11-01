import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let storedEmployees = JSON.parse(localStorage.getItem('registeredUser'));
    
    // Check if `storedEmployees` is an object, convert it to an array if so
    if (storedEmployees && !Array.isArray(storedEmployees)) {
      storedEmployees = [storedEmployees];
    }
    
    console.log('Formatted employees:', storedEmployees); // Check the formatted data
    setEmployees(storedEmployees || []);
  }, []);

  return (
    <Grid container spacing={3}>
      {employees.length > 0 ? (
        employees.map((employee, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                width: '100%',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                minHeight: '200px',
              }}
            >
              <Box
                component="img"
                src={employee.imageUrl || 'https://via.placeholder.com/150'}
                alt={employee.name}
                sx={{
                  width: '40%',
                  height: 'auto',
                  maxHeight: '200px',
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '60%',
                  padding: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{employee.name}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>
                  Designation: {employee.designation}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1rem' }}>
                  Phone: {employee.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" sx={{ textAlign: 'center', width: '100%' }}>
          No employees found.
        </Typography>
      )}
    </Grid>
  );
};

export default EmployeeList;
