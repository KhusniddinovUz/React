export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id: id,
  };
};
