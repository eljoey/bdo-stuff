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

const Items = () => {
  const { main, sub } = useParams();
  const { url } = useRouteMatch();
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchItemList = async () => {
      const fetchedItemList = await apiService.getItemList(main, sub);
      setItemList(fetchedItemList.marketList);
      setLoading(false);
    };
    fetchItemList();
  }, [main, sub]);

  if (!loading) {
    return (
      <Collection>
        {itemList.map((item) => (
          <CollectionItem
            style={{ padding: '15px', backgroundColor: '#616161' }}
          >
            <Link to={`${url}/${item.mainKey}`} className='white-text'>
              {item.name}--Price:{item.minPrice}--For Sale:{item.sumCount}
              <Badge className='teal white-text'>{item.sumCount}</Badge>
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

export default Items;
