const loader = (state = { loading: false }, action) => {
  switch (action.type) {
    case 'SET_TRUE':
      return { loading: true };
    case 'SET_FALSE':
      return { loading: false };
    default:
      return state;
  }
};

export default loader;
