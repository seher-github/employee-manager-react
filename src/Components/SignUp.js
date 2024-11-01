import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    department: '',
    phone: '',
    email: '',
    imageUrl: '',
    password: '' // Add password field
  });

  // Update form data state on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUp = () => {
    const registeredUser = localStorage.getItem('registeredUser');
 
    if (registeredUser) {
      const userData = JSON.parse(registeredUser);
      if (userData && userData.email === formData.email) {
        toast.error('User already registered. Please log in.');
        return;
      }
    }
 
    // Save employee data and assign role
    localStorage.setItem(
      'registeredUser',
      JSON.stringify({ ...formData, role: 'employee' }) // Include role as 'employee'
    );
 
    toast.success('Sign-up successful! Redirecting to login...');
 
    setTimeout(() => {
      setCurrentPage('login');
    }, 2000);
 };
 
  

  

  return (
    <StyledForm>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          fontWeight: 800,
          color: '#CD5C5C',
        }}
      >
        <PersonAddIcon sx={{ mr: 1 }} />
        Sign Up
      </Typography>

      <Grid container spacing={2}>
        {['name', 'designation', 'department', 'phone', 'email', 'imageUrl', 'password'].map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <StyledTextField
              label={`Employee ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              name={field}
              variant="standard"
              InputProps={{ disableUnderline: true, type: field === 'password' ? 'password' : 'text' }} // Set type for password
              fullWidth
              value={formData[field]}
              onChange={handleChange}
            />
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        fullWidth
        sx={{
          bgcolor: '#B22222',
          color: '#fff',
          mt: 2,
          '&:hover': { bgcolor: '#8B0000' },
        }}
        onClick={handleSignUp}
      >
        Sign Up
      </Button>

      <Button
        fullWidth
        sx={{ mt: 2, color: '#CD5C5C', textDecoration: 'underline' }}
        onClick={() => setCurrentPage('login')}
      >
        Already registered? Log in here.
      </Button>
      <ToastContainer />
    </StyledForm>
  );
};

// Styled components...
const StyledForm = styled(Box)( {
  width: '100%',
  maxWidth: '600px',
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  justifyItems: 'center',
});

// Styled component for the text fields
const StyledTextField = styled(TextField)( {
  '& label': { color: '#CD5C5C' },
  '& input': { borderBottom: '2px solid #CD5C5C', paddingBottom: '4px' },
  '& label.Mui-focused': { color: '#B22222' },
  '& .MuiInput-underline:before': { borderBottom: 'none' },
});

export default SignUp;
