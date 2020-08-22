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

    const accessoryCheck = (category, index) => {
      const names = {
        accessories: {
          0: '',
          1: 'PRI: ',
          2: 'DUO: ',
          3: 'TRI: ',
          4: 'TET: ',
          5: 'PEN: ',
        },
        others: {
          0: '',
          1: '+1 ',
          2: '+2 ',
          3: '+3 ',
          4: '+4 ',
          5: '+5 ',
        },
      };

      if (category === 20) {
        return names.accessories[index];
      } else {
        return names.others[index];
      }
    };

    const enhanceLevelTitle = {
      0: accessoryCheck(itemInfo[0].mainCategory, 0),
      1: accessoryCheck(itemInfo[0].mainCategory, 1),
      2: accessoryCheck(itemInfo[0].mainCategory, 2),
      3: accessoryCheck(itemInfo[0].mainCategory, 3),
      4: accessoryCheck(itemInfo[0].mainCategory, 4),
      5: accessoryCheck(itemInfo[0].mainCategory, 5),
      8: '+8 ',
      11: '+11 ',
      13: '+13 ',
      14: '+14 ',
      15: '+15 ',
      16: 'PRI: ',
      17: 'DUO: ',
      18: 'TRI: ',
      19: 'TET: ',
      20: 'PEN: ',
    };

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
              {`${enhanceLevelTitle[item.subKey]}${item.name}`}
              {'  '}
              <span className='grey-text'>{`$${item.pricePerOne
                .toString()
                .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}`}</span>
            </Link>
            <Badge className='amber-text'>{item.count}</Badge>
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
