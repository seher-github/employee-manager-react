import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import LockIcon from '@mui/icons-material/Lock';
import { toast } from 'react-toastify';

const Login = ({ role, email, setEmail, password, setPassword, onLogin }) => {
  const handleLogin = () => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
  
    if (!registeredUser) {
      toast.error('No registered user found. Please sign up.');
      return;
    }
  
    const isEmployeeLogin = role === 'employee';
  
    // Match stored credentials for employee role
    if (isEmployeeLogin && registeredUser.email === email && registeredUser.password === password && registeredUser.role === 'employee') {
      toast.success('Employee login successful!');
      onLogin(); // Call the login success handler for employee
    } else if (role === 'admin') {
      if (email === 'admin@gmail.com' && password === 'admin') {
        localStorage.setItem('isAdmin', true);
        toast.success('Admin login successful!');
        onLogin(); // Call the login success handler for admin
      } else {
        toast.error('Invalid admin credentials');
      }
    } else {
      toast.error('Invalid employee credentials');
    }
  };
  
  
  

  return (
    <StyledForm>
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          fontWeight: 800,
          color: '#CD5C5C',
        }}
      >
        <LockIcon sx={{ mr: 1 }} />
        {role === 'admin' ? 'Admin Login' : 'Employee Login'}
      </Typography>

      <StyledTextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="standard"
        InputProps={{ disableUnderline: true }}
        fullWidth
        margin="normal"
      />
      <StyledTextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="standard"
        InputProps={{ disableUnderline: true }}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{
          bgcolor: '#B22222',
          color: '#fff',
          mt: 3,
          '&:hover': { bgcolor: '#8B0000' },
        }}
      >
        Login
      </Button>
    </StyledForm>
  );
};

const StyledForm = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  justifyItems:'center',
});

// Styled component for the text fields
const StyledTextField = styled(TextField)({
  '& label': {
    color: '#CD5C5C',
  },
  '& input': {
    borderBottom: '2px solid #CD5C5C',
    paddingBottom: '4px',
  },
  '& label.Mui-focused': {
    color: '#B22222',
  },
  '& .MuiInput-underline:before': {
    borderBottom: 'none',
  },
});
export default Login;
