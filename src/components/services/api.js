import axios from 'axios';

const baseUrl = 'https://bdo-api-helper.herokuapp.com/marketplace-clone';
const region = '?region=na';

const getItemList = async (main, sub) => {
  const itemList = await axios.get(
    `${baseUrl}/item-list/${main}/${sub}${region}`
  );

  return itemList.data;
};

const getItemInfo = async (id) => {
  const itemInfo = await axios.get(`${baseUrl}/item-info/${id}${region}`);
  console.log(itemInfo.data);

  return itemInfo.data;
};

export default {
  getItemList,
  getItemInfo,
};
