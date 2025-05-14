import { useState, useEffect } from 'react';

export interface Asset {
  ric: string;
  name: string;
  last: number;
  change: string;
}

const assetData = {
  identifier: 'ric',
  label: 'ric',
  items: [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
  ]
};

export const useAssetData = () => {
  const [data, setData] = useState<typeof assetData.items>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(assetData.items);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch asset data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
