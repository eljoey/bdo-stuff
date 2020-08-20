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

  return itemInfo.data;
};

const getItemPricing = async (id, level) => {
  const itemPricing = await axios.get(
    `${baseUrl}/item-pricing/${id}/${level}${region}`
  );

  return itemPricing.data;
};

export default {
  getItemList,
  getItemInfo,
  getItemPricing,
};
