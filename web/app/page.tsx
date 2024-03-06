"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloWorld: React.FC = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:80/Hello');
        console.log("ok");
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello, のっぽ!</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default HelloWorld;