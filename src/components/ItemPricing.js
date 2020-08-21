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

//TODO: Reverse list to have highest price up top.

const ItemPricing = () => {
  const { itemId, enhanceLevel } = useParams();
  const [itemPricing, setItemPricing] = useState(null);
  const [itemName, setItemName] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getItemPricing = async () => {
      const fetchedItemInfo = await apiService.getItemPricing(
        itemId,
        enhanceLevel
      );
      const fetchedItemName = await apiService.getItemInfo(itemId);

      setItemName(fetchedItemName.detailList[0].name);
      setItemPricing(fetchedItemInfo.marketConditionList);
      setLoading(false);
    };

    getItemPricing();
  }, [enhanceLevel, itemId]);

  if (!loading) {
    return (
      <Collection>
        <CollectionItem className='center-align'>
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
              {`$${item.pricePerOne}`}
              <Badge className='teal white-text'>{item.sellCount}</Badge>
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
