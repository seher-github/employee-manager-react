import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import bgImage from '../Assets/bg.jpg';
import Login from '../Components/Login';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ELogin = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('employee'); // Ensure the role is set to 'employee'
  const navigate = useNavigate();

  const handleLogin = () => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
 
    if (!registeredUser) {
       toast.error('No registered user found. Please sign up.');
       return;
    }
 
    // Check if role matches 'employee' and credentials are valid
    if (registeredUser.role === 'employee' && registeredUser.email === email && registeredUser.password === password) {
       toast.success('Employee login successful!');
       setCurrentPage('employee');
       navigate('employee'); // Ensure you navigate to the correct route
    } else {
       toast.error('Invalid credentials. Please check your email and password.');
    }
 };
 

  return (
    <BackgroundContainer>
      <CenteredBox>
        <Login 
          role={role}  // Ensure role is set to 'employee'
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          onLogin={handleLogin} // Call handleLogin on login
        />
      </CenteredBox>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.3), rgba(139, 0, 0, 0.5)), url(${bgImage})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
}));

const CenteredBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
}));

export default ELogin;
