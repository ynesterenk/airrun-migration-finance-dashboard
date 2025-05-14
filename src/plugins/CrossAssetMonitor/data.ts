export interface CrossAssetItem {
  id: string;
  assetName: string;
  region: string;
  assetType: string;
  price: number;
  change: number;
  percentChange: number;
  lastUpdated: string;
}

export const crossAssetData: CrossAssetItem[] = [
  {
    id: "NDX",
    assetName: "NASDAQ 100",
    region: "US",
    assetType: "Index",
    price: 15010.43,
    change: 10.50,
    percentChange: 0.07,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "FTSE",
    assetName: "FTSE 100 INDEX",
    region: "UK",
    assetType: "Index",
    price: 7455.68,
    change: -10.30,
    percentChange: -0.14,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "HSI",
    assetName: "HANG SENG INDEX",
    region: "HK",
    assetType: "Index",
    price: 16993.44,
    change: -350.12,
    percentChange: -2.08,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "VOO",
    assetName: "VANGUARD S&P 500 ETF",
    region: "US",
    assetType: "ETF",
    price: 511.14,
    change: 5.50,
    percentChange: 1.08,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "DAX",
    assetName: "DAX INDEX",
    region: "DE",
    assetType: "Index",
    price: 22539.61,
    change: 690.00,
    percentChange: 3.08,
    lastUpdated: new Date().toISOString(),
  },
  {
    id: "PX1",
    assetName: "CAC 40 INDEX",
    region: "FR",
    assetType: "Index",
    price: 7876.36,
    change: -170.25,
    percentChange: -2.18,
    lastUpdated: new Date().toISOString(),
  },
];
