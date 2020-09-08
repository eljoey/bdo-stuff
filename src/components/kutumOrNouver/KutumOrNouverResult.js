import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Loading from '../Loading';

const KutumOrNouverResult = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    baseAp,
    kutumLvl,
    kutumCaphra,
    nouverLvl,
    nouverCaphra,
  } = queryString.parse(location.search);

  useEffect(() => {
    setLoading(true);
    const getResults = async () => {
      const resultsData = await apiService.getKutumOrNouver(
        baseAp,
        kutumLvl,
        kutumCaphra,
        nouverLvl,
        nouverCaphra
      );
      setResults(resultsData);
      setLoading(false);
    };
    getResults();
  }, [baseAp, kutumCaphra, kutumLvl, nouverCaphra, nouverLvl]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        className='center-align'
        style={{
          height: '95vh',
          border: 'solid 1px white',
          marginTop: '8px',
          marginBottom: '8px',
          backgroundColor: '#616161',
          paddingTop: '55px',
        }}
      >
        <div className='center-align'>
          <h2>Your best Offhand Is:</h2>
          <p className='teal-text lighten-1' style={{ fontSize: '32px' }}>
            {results.bestOffhand}
          </p>
        </div>
        <div>
          <h5>Effective Ap Difference: </h5>
          <p className='teal-text lighten-1' style={{ fontSize: '20px' }}>
            {results.effectiveApDiff}
          </p>
        </div>
      </div>
    );
  }
};

export default KutumOrNouverResult;
