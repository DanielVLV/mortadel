import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="О компании" {...a11yProps(0)} />
          <Tab label="Продукция" {...a11yProps(1)} />
          <Tab label="Регистрация/Войти" {...a11yProps(2)} />
          <Tab label="Связаться с нами" {...a11yProps(3)} />
          <Tab label="Корзина" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        О компании
      </TabPanel>
      <TabPanel value={value} index={1}>
        Продукция
      </TabPanel>
      <TabPanel value={value} index={2}>
        Регистрация/Войти
      </TabPanel>
      <TabPanel value={value} index={3}>
        Связаться с нами
      </TabPanel>
      <TabPanel value={value} index={4}>
        Корзина
      </TabPanel>

    </Box>
  );
}
