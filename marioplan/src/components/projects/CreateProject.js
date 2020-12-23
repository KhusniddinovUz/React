import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    if (e.target.id === 'title') {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject({ title: title, content: content }));
  };
  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='white myBox'>
        <h5 className='grey-text text-darken-3'>Create Project</h5>
        <div className='input-field'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' onChange={handleChange} />
        </div>
        <div className='input-field'>
          <label htmlFor='content'>Project Content</label>
          <textarea
            id='content'
            className='materialize-textarea'
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='input-field'>
          <button className='btn pink lighten-1'>Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
