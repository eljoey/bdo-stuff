import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './services/api';
import {
  Row,
  Col,
  Preloader,
  Collection,
  CollectionItem,
  Badge,
} from 'react-materialize';

const ItemPricing = () => {
  const { itemId, enhanceLevel } = useParams();
  const [itemPricing, setItemPricing] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemPricing = async () => {
      const fetchedItemPricing = await apiService.getItemPricing(
        itemId,
        enhanceLevel
      );
      const fetchedItemName = await apiService.getItemInfo(itemId);

      // Shorten and sort by highest value first.
      const formattedItemInfo = fetchedItemPricing.marketConditionList
        .map((item) => {
          return {
            sellCount: item.sellCount,
            buyCount: item.buyCount,
            pricePerOne: item.pricePerOne,
          };
        })
        .reverse();

      setItemName(fetchedItemName.detailList[0].name);
      setItemPricing(formattedItemInfo);
      setLoading(false);
    };

    getItemPricing();
  }, [enhanceLevel, itemId]);

  if (!loading) {
    return (
      <Collection>
        <CollectionItem style={{ padding: '15px' }}>
          {itemName}
          <Badge>In Stock</Badge>
        </CollectionItem>
        {itemPricing.map((item) => (
          <CollectionItem
            style={{
              padding: '15px',
              backgroundColor: '#616161',
              color: 'white',
            }}
          >
            <div>
              {`$${item.pricePerOne
                .toString()
                .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}`}{' '}
              <Badge className='amber-text'>{item.sellCount}</Badge>
              <Badge className='red-text text-lighten-2'>
                {item.buyCount === 0 ? '' : `(Orders: ${item.buyCount})`}
              </Badge>
            </div>
          </CollectionItem>
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

export default ItemPricing;
