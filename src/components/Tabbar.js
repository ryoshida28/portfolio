import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SmartTune from './projects/SmartTune/SmartTune'
import BargainSwipes from './projects/BargainSwipes/BargainSwipes'
import AdobeAllHands from './projects/AdobeAllHands/AdobeAllHands'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
    const classes = useStyles();
    return (
        <Tab
        component="p"
        onClick={event => {
            event.preventDefault();
        }}
        className={ props.selected ? classes.tab_selected : classes.tab_normal }
        {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab_selected: {
      color: "#fff",
      backgroundColor: "#2C3E50"
  },
  tab_normal: {
      color: "#000",
      backgroundColor: "#95a5a6",
      '&:hover': {
          backgroundColor: "#7b8a8b"
      }
  },
  panel: {
    backgroundColor: "#fafafa"
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Smart Tune" href="/smart-tune" {...a11yProps(0)} />
          <LinkTab label="Bargain Swipes" href="/bargain-swipes" {...a11yProps(1)} />
          <LinkTab label="Adobe All Hands" href="/adobe-all-hands" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.panel} value={value} index={0}>
        <SmartTune />
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={1}>
        <BargainSwipes />
      </TabPanel>
      <TabPanel className={classes.panel} value={value} index={2}>
        <AdobeAllHands />
      </TabPanel>
    </div>
  );
}
