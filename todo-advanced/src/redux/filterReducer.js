const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case 'CHANGE':
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;
