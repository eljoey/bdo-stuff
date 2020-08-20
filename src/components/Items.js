import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import apiService from './services/api';
import { Row, Col, Preloader } from 'react-materialize';

const Items = () => {
  const { main, sub } = useParams();
  const { url } = useRouteMatch();
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemList = async () => {
      const fetchedItemList = await apiService.getItemList(main, sub);
      setItemList(fetchedItemList.marketList);
      setLoading(false);
    };
    fetchItemList();
  }, [main, sub]);

  if (!loading) {
    return (
      <div>
        {itemList.map((item) => (
          <div>
            <Link to={`${url}/${item.mainKey}`}>
              {item.name}--Price:{item.minPrice}--For Sale:{item.sumCount}
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div style={{ height: '100vh' }} className='valign-wrapper center-align'>
        <Row>
          <Col>
            <Preloader active color='blue' flashing={false} className='big' />
          </Col>
        </Row>
      </div>
    );
  }
};

export default Items;
