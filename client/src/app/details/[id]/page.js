"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DetailsPage = ({params}) => {
    const id =  '652a1e72ee12ba0ec9c13d40'
    console.log(id);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (id) {
      axios.post('/api/detailsproduct', id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [id]);

  return (
    <div className='pt-12'>
      <h1>Details Page {id}</h1>
      <div>
        {data && (
          <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
