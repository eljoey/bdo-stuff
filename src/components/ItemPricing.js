import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './services/api';
import { Row, Col, Preloader } from 'react-materialize';

const ItemInfo = () => {
  const { itemId, enhanceLevel } = useParams();
  const [itemPricing, setItemPricing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItemPricing = async () => {
      const fetchedItemInfo = await apiService.getItemPricing(
        itemId,
        enhanceLevel
      );
      setItemPricing(fetchedItemInfo.marketConditionList);
      setLoading(false);
    };

    getItemPricing();
  }, [enhanceLevel]);

  if (!loading) {
    return (
      <div>
        {itemPricing.map((item) => (
          <div>{`Price: ${item.pricePerOne} -- Count: ${item.sellCount}`}</div>
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
