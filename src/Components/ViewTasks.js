import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ViewTasks = () => {
  // Sample tasks with additional details
  const tasks = [
    {
      name: 'Task 1',
      description: 'Complete the project report',
      time: '2024-10-27 10:00 AM',
    },
    {
      name: 'Task 2',
      description: 'Attend the team meeting',
      time: '2024-10-27 2:00 PM',
    },
    {
      name: 'Task 3',
      description: 'Submit the code review',
      time: '2024-10-27 4:00 PM',
    },
  ];

  return (
    <Grid container spacing={3}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>Tasks Assigned</Typography>
      {tasks.map((task, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ backgroundColor: '#ffcccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {task.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {task.description}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Assigned at: {task.time}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ViewTasks;
