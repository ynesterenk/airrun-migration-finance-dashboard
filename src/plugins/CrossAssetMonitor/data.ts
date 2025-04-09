export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
];

export type CrossAssetItem = typeof crossAssetData[0];

export interface AssetItem {
    asset: string;
    price: number;
    dayChange: number;
    percentChange: number;
}

export const mockAssetData: AssetItem[] = [
    { asset: "Gold", price: 1800.50, dayChange: 10.75, percentChange: 0.60 },
    { asset: "Silver", price: 25.30, dayChange: 0.20, percentChange: 0.80 },
    { asset: "Oil", price: 70.45, dayChange: -1.30, percentChange: -1.80 },
    { asset: "Bitcoin", price: 45000.00, dayChange: 1500.00, percentChange: 3.45 }
];