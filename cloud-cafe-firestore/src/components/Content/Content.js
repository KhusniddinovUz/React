import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFalse, setTrue } from '../../redux/actions/loading';
import Form from '../Form/Form';
import Lists from '../Lists/Lists';
import { db } from '../../firebase';
import './Content.scss';

const Content = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setTrue());
    const name = document.getElementById('name').value;
    const city = document.getElementById('city').value;
    document.getElementById('city').value = '';
    document.getElementById('name').value = '';
    db.collection('cafes')
      .add({
        name: name,
        city: city,
      })
      .then(() => dispatch(setFalse()));
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection('cafes')
      .get()
      .then((snapshot) => {
        setData(snapshot.docs);
      });
  }, [db.collection('cafes').get()]);
  return (
    <div className='Content'>
      <Form submit={submitHandler} />
      <Lists data={data} />
    </div>
  );
};

export default Content;
