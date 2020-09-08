import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import ResultsTable from './ResultsTable';
import api from '../services/api';
import { Tabs, Tab } from 'react-materialize';
import './UpgradeResults.css';

const UpgradeResults = () => {
  const storageData = JSON.parse(localStorage.getItem('formData'));
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(storageData.data);
  const [region, setRegion] = useState(storageData.region);
  const [upgradeData, setUpgradeData] = useState(null);
  const tabOptions = {
    duration: 300,
    onShow: null,
    responsiveThreshold: Infinity,
    swipeable: false,
  };

  console.log(upgradeData);

  useEffect(() => {
    setLoading(true);

    const getUpgradeData = async () => {
      const data = await api.postItemUpgrade(formData, region);
      setUpgradeData(data);
      setLoading(false);
    };

    getUpgradeData();
  }, [formData, region]);

  if (!loading) {
    return (
      <div
        style={{
          height: '100%',
          border: 'solid 1px white',
          marginTop: '8px',
          marginBottom: '8px',
          backgroundColor: '#616161',
        }}
      >
        <Tabs
          className='tab-demo z-depth-1 tabs-fixed-width grey darken-2'
          style={{
            fontColor: 'white',
            backgroundColor: '#616161',
          }}
        >
          <Tab options={tabOptions} className='white-text' title='Ap'>
            <ResultsTable data={upgradeData} sortBy={'ap'} />
          </Tab>
          <Tab options={tabOptions} className='white-text' title='Dp'>
            <ResultsTable data={upgradeData} sortBy={'dp'} />
          </Tab>
          <Tab options={tabOptions} className='white-text' title='Ap + Dp'>
            <ResultsTable data={upgradeData} sortBy={'total'} />
          </Tab>
        </Tabs>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default UpgradeResults;
