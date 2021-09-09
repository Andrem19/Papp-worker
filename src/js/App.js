import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Download from './Download';
import Predict from './Predict';
import './index.scss'
import Instruction from './Instruction';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root} style={{widgth: 100}}>
      <AppBar style={{widgth: 100}} position="static" color="default">
        <Tabs
          style={{widgth: 100}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Download Data" {...a11yProps(0)} />
          <Tab label="Predict" {...a11yProps(1)} />
          <Tab label="Instructions" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        style={{widgth: 1000}}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x-reverse'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Download />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Predict />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Instruction />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}