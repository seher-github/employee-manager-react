// Admin.js
import React, { useState } from 'react';
import { Box, Grid, Typography, Tabs, Tab } from '@mui/material';
import EmployeeList from '../Components/EmployeeList';
import AssignTaskForm from '../Components/AssignTaskForm';
import ManageEmployeesForm from '../Components/ManageEmployeesForm'; // Import the new component

const Admin = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Grid container
      sx={{
        backgroundColor: '#9b0000',
        color: '#ffffff',
        height: '100vh',
      }}
    >
      {/* Left Column for Navigation */}
      <Grid item xs={2}>
        <Box
          sx={{
            p: 2,
            backgroundColor: '#9b0000',
            color: '#ffffff',
            height: '90vh',
            position: 'relative',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <Tabs
            orientation="vertical"
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              '& .MuiTab-root': {
                minWidth: '100%',
                fontWeight: 'bold',
              },
              '& .Mui-selected': {
                backgroundColor: '#f0f0f0',
                color: '#9b0000 !important',
                borderRadius: '8px',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#9b0000',
                width: '4px',
                left: 0,
                borderRadius: '4px',
              },
            }}
          >
            <Tab label="Employee List" />
            <Tab label="Assign Task to Employees" />
            <Tab label="Manage Employees" /> {/* Updated Tab label */}
          </Tabs>
        </Box>
      </Grid>

      {/* Right Column for Content */}
      <Grid item xs={10}>
        <Box
          sx={{
            p: 4,
            backgroundColor: '#ffcccc',
            borderRadius: '8px',
            height: '85vh',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            margin: '16px',
          }}
        >
          {activeTab === 0 && (
            <>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
                Admin Dashboard
              </Typography>
              <EmployeeList />
            </>
          )}
          {activeTab === 1 && <AssignTaskForm />}
          {activeTab === 2 && <ManageEmployeesForm />} {/* Display ManageEmployeesForm for Tab 3 */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Admin;
