import React, { useState, useEffect } from 'react';
import apiService from './services/api';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Loading from './Loading';

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

  console.log(results);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        style={{
          height: '95vh',
          border: 'solid 1px white',
          marginTop: '8px',
          marginBottom: '8px',
          backgroundColor: '#616161',
          paddingLeft: '15px',
        }}
      >
        <p className='white-text '>
          Total Cost: $
          {results.totalCaphrasPrice
            .toString()
            .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
        </p>
      </div>
    );
  }
};

export default CaphrasResult;
