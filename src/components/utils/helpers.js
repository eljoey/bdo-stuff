const getTextColor = (grade) => {
  const colors = {
    0: 'white',
    1: '#4caf50',
    2: '#2196f3',
    3: '#ffeb3b',
    4: 'orange',
  };

  return colors[grade];
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTextColor,
};
