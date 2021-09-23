import React, {useState} from 'react';
import {
  makeStyles,
  Box,
  Paper,
  AppBar,
  CircularProgress,
  Tabs,
  Tab,
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';
import ConversionTemperature from './TabPanels/ConversionTemperature';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: theme.spacing(5),
  },
  paper: {
    height: '100%',
    position: 'relative',
  },
  topbar: {
    position: 'relative',
  },
  swipe: { 
    padding: theme.spacing(2),  
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const history = useHistory();
  const [value, setValue] = useState(0);

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const a11yProps = (index) => {
    return {
      id: `exercise-tab-${index}`,
      'aria-controls': `exercise-tabpanel-${index}`,
    };
  }

  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <AppBar className={classes.topbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="Exercises"
          >
            <Tab label="Conversion Celsius to Fahrenheit" {...a11yProps(0)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.swipe}
        >
          <ConversionTemperature value={value} index={0} />
        </SwipeableViews>
      </Paper>
    </Box>
  );
}
