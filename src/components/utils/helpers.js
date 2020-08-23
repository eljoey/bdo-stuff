const getTextColor = (grade) => {
  const colors = {
    0: 'white-text',
    1: 'green-text',
    2: 'blue-text',
    3: 'yellow-text',
    4: 'orange-text accent-3',
  };

  return colors[grade];
};

export default {
  getTextColor,
};
