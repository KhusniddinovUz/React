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

export const replaceTodo = (done, index) => {
  return {
    type: 'REPLACE_TODO',
    done: done,
    index: index,
  };
};
