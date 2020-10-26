export const changeFilter = (method) => {
  return {
    type: 'CHANGE',
    filter: method,
  };
};
