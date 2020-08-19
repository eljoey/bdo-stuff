import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from './services/api';

const Items = () => {
  let { main, sub } = useParams();
  const [itemList, setItemList] = useState(null);

  useEffect(() => {
    const fetchItemList = async () => {
      const fetchedItemList = await apiService.getItemList(main, sub);
      setItemList(fetchedItemList.marketList);
    };
    fetchItemList();
  }, [main, sub]);

  if (itemList) {
    return (
      <div>
        {itemList.map((item) => (
          <div>
            {item.name}--Price:{item.minPrice}--For Sale:{item.sumCount}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>hi</div>;
  }
};

export default Items;
