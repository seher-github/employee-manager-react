import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import bgImage from '../Assets/bg.jpg'; // Ensure this path is correct

const Home = ({ setCurrentPage }) => { // Accept setCurrentPage as a prop
  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Grid container sx={{ height: '100vh' }}>
        {/* Left Column */}
        <Grid 
          item 
          xs={10} 
          md={6} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            p: 3,
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ mb: 3, maxWidth: '90%', textAlign: 'center', fontWeight: 600 }}>
            Employee <span style={{ color: '#CD5C5C', fontWeight: 900 }}>Task Management</span> System
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3, maxWidth: '70%', textAlign: 'center', fontSize: '20px', color: 'gray' }}>
            Welcome to our employee task management system. Choose an option below to get started.
          </Typography>
          <Box>
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<LoginIcon />} 
              sx={{ bgcolor: '#B22222', m: 1, p: 2 }}
              onClick={() => setCurrentPage('alogin')} // Set the current page to ALogin
            >
              Login as Admin
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<AccountCircleIcon />} 
              sx={{ bgcolor: '#CD5C5C', m: 1, p: 2 }}
              onClick={() => setCurrentPage('signup')} // Set the current page to ELogin
            >
              Login as Employee
            </Button>
          </Box>
        </Grid>

        {/* Right Column with Background Image */}
        <Grid item xs={16} md={6}>
          <StyledImage />
        </Grid>
      </Grid>
    </Box>
  );
};

// Styled component for the background image
const StyledImage = styled(Box)(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100%',
  width: '100%',
}));

export default Home;
