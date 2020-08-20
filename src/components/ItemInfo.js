import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import apiService from './services/api';
import { Row, Col, Preloader } from 'react-materialize';

const ItemInfo = () => {
  const { itemId } = useParams();
  const { url } = useRouteMatch();
  const [itemInfo, setItemInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemInfo = async () => {
      const fetchedItemInfo = await apiService.getItemInfo(itemId);
      setItemInfo(fetchedItemInfo.detailList);
      setLoading(false);
    };

    getItemInfo();
  }, [itemId]);

  if (!loading) {
    return (
      <div>
        {itemInfo.map((item) => (
          <div>
            <Link to={`${url}/${item.subKey}`} className='black-text'>
              {item.name}--Price:{item.pricePerOne}--For Sale:{item.count}
              --Enhance Level:{item.subKey}
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

export default ItemInfo;
