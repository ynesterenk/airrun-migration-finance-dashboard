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

export const assetData: AssetItem[] = [
    { asset: 'NASDAQ 100', price: 15010.43, dayChange: 0.0, percentChange: 0.0 },
    { asset: 'FTSE 100 INDEX', price: 7455.68, dayChange: -0.14, percentChange: -0.14 },
    { asset: 'HANG SENG INDEX', price: 16993.44, dayChange: -2.08, percentChange: -2.08 },
    { asset: 'VANGUARD S&P 500 ETF', price: 511.14, dayChange: 1.08, percentChange: 1.08 },
    { asset: 'DAX INDEX', price: 22539.61, dayChange: 3.08, percentChange: 3.08 },
    { asset: 'CAC 40 INDEX', price: 7876.36, dayChange: -2.18, percentChange: -2.18 }
];