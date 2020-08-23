import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './services/api';
import {
  Row,
  Col,
  Collection,
  CollectionItem,
  Badge,
  ProgressBar,
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

      const formattedItemInfo = fetchedItemPricing.marketConditionList.reverse();

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
      <Row>
        <Col s={12}>
          <ProgressBar />
        </Col>
      </Row>
    );
  }
};

export default ItemPricing;
