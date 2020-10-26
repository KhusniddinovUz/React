import React from 'react';
import { useSelector } from 'react-redux';
const Filter = () => {
  const state = useSelector((state) => state);
  const length = state.filter((a) => a.done === false);
  return (
    <div className='Filter'>
      <p>
        {length.length}
        {length.length <= 1 ? <span>item</span> : <span>items</span>} left
      </p>
    </div>
  );
};

export default Filter;
