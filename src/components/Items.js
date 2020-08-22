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
import mpList from './assets/mpTabs';

const Items = () => {
  const { main, sub } = useParams();
  const { url } = useRouteMatch();
  const [itemList, setItemList] = useState(null);
  const [loading, setLoading] = useState(true);
  const findMpTabIndex = mpList.indexOf(
    mpList.find((e) => e.tab === Number(main))
  );

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
        <CollectionItem style={{ padding: '15px' }}>
          {mpList[findMpTabIndex].subTabs[Number(sub) - 1].title}
        </CollectionItem>
        {itemList.map((item) => (
          <CollectionItem
            style={{ padding: '15px', backgroundColor: '#616161' }}
          >
            <Link to={`${url}/${item.mainKey}`} className='white-text'>
              {item.name}
              <Badge className='amber-text'>{item.sumCount}</Badge>
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
