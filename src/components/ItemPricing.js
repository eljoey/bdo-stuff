import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './services/api';
import {
  Row,
  Col,
  Preloader,
  Collection,
  CollectionItem,
} from 'react-materialize';

const ItemInfo = () => {
  const { itemId, enhanceLevel } = useParams();
  const [itemPricing, setItemPricing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemPricing = async () => {
      const fetchedItemInfo = await apiService.getItemPricing(
        itemId,
        enhanceLevel
      );
      setItemPricing(fetchedItemInfo.marketConditionList);
      setLoading(false);
    };

    getItemPricing();
  }, [enhanceLevel, itemId]);

  if (!loading) {
    return (
      <Collection>
        {itemPricing.map((item) => (
          <CollectionItem
            style={{
              padding: '15px',
              backgroundColor: '#616161',
              color: 'white',
            }}
          >{`Price: ${item.pricePerOne} -- Count: ${item.sellCount}`}</CollectionItem>
        ))}
      </Collection>
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
