import React from 'react';
import './Input.scss';

const Input = (props) => {
  return (
    <div className="Input">
      <form onSubmit={(e) => props.click(e)}>
        <input
          type="text"
          placeholder="New Todo"
          onChange={(e) => props.change(e)}
          value={props.value}
        />
        <button type="submit" className="search">
          Add Task
        </button>
      </form>
    </div>  
  );
};

export default Input;
