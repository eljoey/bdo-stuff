import axios from 'axios';

const baseUrl = 'https://bdo-api-helper.herokuapp.com/marketplace-clone';
const region = '?region=na';

const getItemList = async (main, sub) => {
  const itemInfo = await axios.get(
    `${baseUrl}/item-list/${main}/${sub}${region}`
  );

  return itemInfo.data;
};

export default {
  getItemList,
};
