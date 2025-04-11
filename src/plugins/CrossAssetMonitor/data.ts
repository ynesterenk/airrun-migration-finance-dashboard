export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
];

export type CrossAssetItem = typeof crossAssetData[0];

// Mock data for CrossAssetMonitor
export interface AssetItem {
    ric: string;
    name: string;
    last: number;
    percentChange: number; // Store as number for easier coloring logic
}

export const mockAssetData: AssetItem[] = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, percentChange: 0.00 },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, percentChange: -0.14 },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, percentChange: -2.08 },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, percentChange: 1.08 },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, percentChange: 3.08 },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, percentChange: -2.18 }
];