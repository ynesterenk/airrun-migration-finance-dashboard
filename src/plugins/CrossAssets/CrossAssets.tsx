import React, { useEffect, useState } from 'react';
import { fetchCrossAssetsData } from './data';

const CrossAssets: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCrossAssetsData();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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