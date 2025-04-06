import React, { useEffect, useState } from 'react';
import { fetchCrossAssetsData } from './data';

const CrossAssets: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCrossAssetsData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Cross Assets</h1>
      <ul>
        {data.map((item) => (
          <li key={item.ric}>{item.name} - {item.last} ({item.change})</li>
        ))}
      </ul>
    </div>
  );
};

export default CrossAssets;
