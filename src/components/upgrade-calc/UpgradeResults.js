import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import ResultsTable from './ResultsTable';
import api from '../services/api';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from './TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#202020',
  },
  tab: {
    color: 'white'
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UpgradeResults = () => {
  const classes = useStyles();
  const storageData = JSON.parse(localStorage.getItem('formData'));
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formData] = useState(storageData.data);
  const [region] = useState(storageData.region);
  const [upgradeData, setUpgradeData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getUpgradeData = async () => {
      const data = await api.postItemUpgrade(formData, region);
      setUpgradeData(data);
      setLoading(false);
    };

    getUpgradeData();
  }, [formData, region]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  if (!loading) {
    return (
      <Paper className={classes.root}>
        <Tabs
          value={value}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChange}
          centered
        >
          <Tab className={classes.tab} label='Ap' {...a11yProps(0)} />
          <Tab className={classes.tab} label='Dp' {...a11yProps(1)} />
          <Tab className={classes.tab} label='Ap + Dp' {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ResultsTable data={upgradeData} sortBy={'ap'} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ResultsTable data={upgradeData} sortBy={'dp'} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ResultsTable data={upgradeData} sortBy={'total'} />
        </TabPanel>
      </Paper >
    );
  } else {
    return <Loading />;
  }
};

export default UpgradeResults;
