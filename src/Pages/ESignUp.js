import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import bgImage from '../Assets/bg.jpg';
import SignUp from '../Components/SignUp';

const ESignUp = ({ setCurrentPage }) => {
  return (
    <BackgroundContainer>
      <CenteredBox>
        <SignUp setCurrentPage={setCurrentPage} /> {/* Pass setCurrentPage */}
      </CenteredBox>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(139, 0, 0, 0.3), rgba(139, 0, 0, 0.5)), url(${bgImage})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const CenteredBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '2rem',
});

export default ESignUp;
