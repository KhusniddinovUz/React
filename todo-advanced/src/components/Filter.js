import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filterActions';
const Filter = () => {
  const state = useSelector((state) => state);
  const length = state.todo.filter((a) => a.done === false);
  const change = useDispatch();

  const filterClick = (index, method) => {
    let filters = document.getElementsByClassName('filter');
    for (let i of filters) {
      i.className = 'filter';
    }
    filters[index].className = 'active filter';
    change(changeFilter(method));
  };
  return (
    <div className='Filter'>
      <p>
        {length.length}
        {length.length <= 1 ? <span> item</span> : <span> items</span>} left
      </p>
      <div className='filters'>
        <div onClick={() => filterClick(0, 'all')} className='active filter'>
          All
        </div>
        <div onClick={() => filterClick(1, 'active')} className='filter'>
          Active
        </div>
        <div onClick={() => filterClick(2, 'done')} className='filter'>
          Completed
        </div>
      </div>
    </div>
  );
};

export default Filter;
