import { useState, useEffect } from 'react';
import axios from 'axios';

export type CrossAssetItem = {
  ric: string;
  name: string;
  last: number;
  change: string;
};

export const useCrossAssetData = () => {
  const [crossAssetData, setCrossAssetData] = useState<CrossAssetItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCrossAssetData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<CrossAssetItem[]>('/api/cross-asset-data');
        setCrossAssetData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch cross asset data');
        console.error('Error fetching cross asset data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCrossAssetData();

    // Optionally, you can set up an interval to fetch data periodically
    const intervalId = setInterval(fetchCrossAssetData, 60000); // Fetch every minute

    return () => clearInterval(intervalId);
  }, []);

  return { crossAssetData, loading, error };
};