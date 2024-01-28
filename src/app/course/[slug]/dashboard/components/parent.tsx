'use client'

import { useEffect, useState } from 'react';
import CourseSidebar, { Ivideos } from './courseSidebar';

const ParentComponent = () => {
  const [data, setData] = useState<Ivideos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api");
        const result: Ivideos[] = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CourseSidebar data={data} />
  );
};

export default ParentComponent;
