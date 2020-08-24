import React, { useEffect, useState } from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import apiService from './services/api';
import { Collection, CollectionItem, Badge } from 'react-materialize';
import mpList from './assets/mpTabs';
import helpers from './utils/helpers';
import Loading from './Loading';

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

      const sortedItemInfo = fetchedItemList.marketList.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      );
      setItemList(sortedItemInfo);
      setLoading(false);
    };
    fetchItemList();
  }, [main, sub]);

  if (!loading) {
    return (
      <Collection>
        <CollectionItem style={{ padding: '15px' }}>
          {mpList[findMpTabIndex].subTabs[Number(sub) - 1].title}
          <Badge>In Stock</Badge>
        </CollectionItem>
        {itemList.map((item) => (
          <CollectionItem
            style={{ padding: '15px', backgroundColor: '#616161' }}
          >
            <Link
              to={`${url}/${item.mainKey}`}
              className={helpers.getTextColor(item.grade)}
            >
              {item.name}
              <Badge className='amber-text'>{item.sumCount}</Badge>
            </Link>
          </CollectionItem>
        ))}
      </Collection>
    );
  } else {
    return <Loading />;
  }
};

export default Items;
