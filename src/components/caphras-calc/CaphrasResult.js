import React, { useState, useEffect } from 'react';
import apiService from '../services/api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Loading from '../Loading';

const CaphrasResult = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const { item, enhLevel, curLevel, desiredLevel, region } = queryString.parse(
    location.search
  );

  useEffect(() => {
    setLoading(true);
    const getResults = async () => {
      const resultsData = await apiService.getCaphrasResult(
        item,
        enhLevel,
        curLevel,
        desiredLevel,
        region
      );
      setResults(resultsData);
      setLoading(false);
    };
    getResults();
  }, [curLevel, desiredLevel, enhLevel, item, region]);

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
          <h2>Total Cost:</h2>
          <p className='green-text' style={{ fontSize: '32px' }}>
            ${' '}
            {results.totalCaphrasPrice
              .toString()
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
          </p>
        </div>
        <div>
          <h5>Caphras Used: </h5>
          <p style={{ fontSize: '18px' }}>
            {results.caphrasNeeded
              .toString()
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
          </p>
        </div>
        <div>
          <h5>Caphras Price:</h5>
          <p style={{ fontSize: '18px' }}>
            $
            {results.caphrasPrice
              .toString()
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
          </p>
        </div>
        <div>
          <h5>Caphras Available:</h5>
          <p style={{ fontSize: '18px' }}>
            {results.caphrasAvailable
              .toString()
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
          </p>
        </div>
        <div>
          <h5>Stats (increase):</h5>
          {Object.entries(results.stats).map(([key, value]) => (
            <p
              style={{ fontSize: '18px', margin: '1px' }}
            >{`${key}: ${value}`}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default CaphrasResult;
