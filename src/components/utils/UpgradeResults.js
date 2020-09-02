import React, { useState, useEffect } from 'react';
import Loading from '../Loading';
import api from '../services/api';

const UpgradeResults = () => {
  const storageData = JSON.parse(localStorage.getItem('formData'));
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(storageData.data);
  const [region, setRegion] = useState(storageData.region);
  const [upgradeData, setUpgradeData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getUpgradeData = async () => {
      const data = await api.getItemUpgrade(formData, region);
      setUpgradeData(data);
      setLoading(false);
    };

    getUpgradeData();
  }, [formData, region]);

  if (!loading) {
    return <div>SUP</div>;
  } else {
    return <Loading />;
  }
};

export default UpgradeResults;
