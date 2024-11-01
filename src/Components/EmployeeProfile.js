import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const EmployeeProfile = () => {
    const loggedInUser = JSON.parse(localStorage.getItem('registeredUser'));
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box
            component="img"
            src={loggedInUser ? loggedInUser.imageUrl : 'default_image.jpg'}
            alt="Employee Profile"
            sx={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box>
            <Typography variant="h6">Name: {loggedInUser ? loggedInUser.name : 'N/A'}</Typography>
            <Typography variant="h6">Role: {loggedInUser ? loggedInUser.role : 'N/A'}</Typography>
            <Typography variant="h6">Department: {loggedInUser ? loggedInUser.department : 'N/A'}</Typography>
          </Box>
        </Grid>
      </Grid>
    );
  };
  

export default EmployeeProfile;
