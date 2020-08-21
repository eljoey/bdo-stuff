import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import apiService from './services/api';
import {
  Row,
  Col,
  Preloader,
  Collection,
  CollectionItem,
  Badge,
} from 'react-materialize';

const ItemInfo = ({ setItemName }) => {
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
    setItemName(itemInfo[0].name);

    return (
      <Collection>
        <CollectionItem style={{ padding: '15px' }}>
          {itemInfo[0].name} <Badge>In Stock</Badge>
        </CollectionItem>
        {itemInfo.map((item) => (
          <CollectionItem
            style={{ padding: '15px', backgroundColor: '#616161' }}
          >
            <Link to={`${url}/${item.subKey}`} className='white-text'>
              {item.name}--Price:{item.pricePerOne}--Enhance Level:{item.subKey}
              <Badge className='teal white-text'>{item.count}</Badge>
            </Link>
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

export default ItemInfo;
