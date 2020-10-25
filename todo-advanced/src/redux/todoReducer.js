const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const copy = [...state];
      copy.push(action.todo);
      return copy;
    default:
      return state;
  }
};

export default todoReducer;
