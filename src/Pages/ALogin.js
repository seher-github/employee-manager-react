import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import bgImage from '../Assets/bg.jpg'; // Ensure this path is correct
import Login from '../Components/Login'; // Importing the Login component
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const ALogin = ({ setCurrentPage }) => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

  const handleLogin = () => {
    // Basic credential check
    if (email === 'admin@gmail.com' && password === 'admin') {
      localStorage.setItem('isAdmin', true); // Store in local storage
      toast.success('Login successful!'); // Show success notification
      setCurrentPage('admin'); // Redirect to the admin page
    } else {
      toast.error('Invalid credentials!'); // Show error notification
    }
  };

  return (
    <BackgroundContainer>
      <CenteredBox>
        <Login 
        role='admin'
          email={email} // Pass email state
          setEmail={setEmail} // Pass setter for email state
          password={password} // Pass password state
          setPassword={setPassword} // Pass setter for password state
          onLogin={handleLogin} // Pass login handler
        /> {/* Displaying the Login form in the center */}
      </CenteredBox>
      <ToastContainer /> {/* Toastify container for notifications */}
    </BackgroundContainer>
  );
};

// Styled component for the background with a gradient overlay
const BackgroundContainer = styled(Box)( {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.3), rgba(139, 0, 0, 0.5)), url(${bgImage})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

// Centered box for the form
const CenteredBox = styled(Box)( {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
});

export default ALogin;
