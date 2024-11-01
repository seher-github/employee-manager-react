import React, { useState } from 'react';
import { Box, Grid, Typography, Tabs, Tab } from '@mui/material';
import EmployeeProfile from '../Components/EmployeeProfile'; // Profile component
import ViewTasks from '../Components/ViewTasks'; // Component to view tasks
import MarkTaskStatus from '../Components/MarkTaskStatus'; // Component to mark tasks as completed

const Employee = () => {
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
            <Tab label="Employee Profile" />
            <Tab label="View Tasks" />
            <Tab label="Mark Task Status" />
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
                Employee Profile
              </Typography>
              <EmployeeProfile />
            </>
          )}
          {activeTab === 1 && (
            <>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
                View Tasks
              </Typography>
              <ViewTasks />
            </>
          )}
          {activeTab === 2 && (
            <>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
                Mark Task Status
              </Typography>
              <MarkTaskStatus />
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Employee;
