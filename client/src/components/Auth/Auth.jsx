/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react';
import {
  Box,
  Paper, Tab, Tabs, Typography
} from '@mui/material';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import './auth.css';

function SignInOutContainer() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width: 340, margin: "20px auto", backgroundColor: 'rgba(78, 66, 92, 0.4)', color: "gold"
  };
  function TabPanel(props) {
    const {
      children, index,
    } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className="authContainer">
      <Paper
        elevation={20}
        style={paperStyle}
      >
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab sx={{ fontFamily: 'Montserrat sans-serif', color: "gold" }} label="Вход" />

          <Tab sx={{ fontFamily: 'Montserrat sans-serif', color: "gold" }} label="Регистрация" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Paper>
    </div>
  );
}

export default SignInOutContainer;
