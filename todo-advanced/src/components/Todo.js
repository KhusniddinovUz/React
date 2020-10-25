import React, { useState } from 'react';

const Todo = (props) => {
  const [check, setCheck] = useState(false);
  let inStyle = {};
  const checkHandler = () => {
    setCheck(!check);
  };

  if (check) {
    inStyle = {
      textDecoration: 'line-through',
      opacity: '0.9',
      color: '#ccc',
    };
  } else {
    inStyle = {
      textDecoration: 'none',
    };
  }

  return (
    <div className='Todo'>
      <input type='checkbox' onClick={checkHandler} />
      <div style={inStyle}>{props.name}</div>
    </div>
  );
};

export default Todo;
