import axios from 'axios';

const baseUrl = 'https://bdo-api-helper.herokuapp.com';
let region = `?region=${JSON.parse(localStorage.getItem('region'))}`;

const setRegionLocation = (location) => {
  region = `?region=${location}`;
};

const getItemList = async (main, sub) => {
  const itemList = await axios.get(
    `${baseUrl}/marketplace-clone/item-list/${main}/${sub}${region}`
  );

  return itemList.data;
};

const getItemInfo = async (id) => {
  const itemInfo = await axios.get(
    `${baseUrl}/marketplace-clone/item-info/${id}${region}`
  );

  return itemInfo.data;
};

const getItemPricing = async (id, level) => {
  const itemPricing = await axios.get(
    `${baseUrl}/marketplace-clone/item-pricing/${id}/${level}${region}`
  );

  return itemPricing.data;
};

const getItemSearch = async (value) => {
  const searchResult = await axios.get(
    `${baseUrl}/marketplace-clone/item-search/${value}${region}`
  );

  return searchResult.data;
};

const getCaphrasResult = async (
  item,
  enhLevel,
  curLevel,
  desiredLevel,
  region
) => {
  const caphrasResult = await axios.get(
    `${baseUrl}/api/caphras-calc?item=${item}&enhLevel=${enhLevel}&curLevel=${curLevel}&desiredLevel=${desiredLevel}&region=${region}`
  );

  return caphrasResult.data;
};

const getItemUpgrade = async (formData, region) => {
  if (region === null || formData === null) {
    console.log('returning');
    return;
  }
  const results = await axios.post(
    `${baseUrl}/api/item-upgrade?region=${region}`,
    formData
  );

  return results.data;
};

export default {
  getItemList,
  getItemInfo,
  getItemPricing,
  getItemSearch,
  setRegionLocation,
  getCaphrasResult,
  getItemUpgrade,
};
