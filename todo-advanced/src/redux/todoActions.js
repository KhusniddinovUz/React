export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo,
  };
};

export const removeTodo = (index) => {
  return {
    type: 'REMOVE_TODO',
    index: index,
  };
};
