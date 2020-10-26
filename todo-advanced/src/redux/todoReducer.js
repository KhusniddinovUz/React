const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let copy = [...state];
      copy.push(action.todo);
      return copy;
    case 'REMOVE_TODO':
      let copy2 = [...state];
      let ind = copy2.findIndex((obj) => obj.id === action.id);
      copy2.splice(ind, 1);
      return copy2;
    case 'REPLACE_TODO':
      let copy4 = [...state];
      copy4[action.index].done = action.done;
      return copy4;
    default:
      return state;
  }
};

export default todoReducer;
