import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Lists from '../Lists/Lists';
import { db } from '../../firebase';
import './Content.scss';

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection('cafes')
      .get()
      .then((snapshot) => {
        setData(snapshot.docs);
      });
  }, []);
  return (
    <div className='Content'>
      <Form />
      <Lists data={data} />
    </div>
  );
};

export default Content;
