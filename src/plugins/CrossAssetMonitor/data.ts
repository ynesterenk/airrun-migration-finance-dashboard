export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00", type: "Index" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%", type: "Index" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%", type: "Index" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%", type: "ETF" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%", type: "Index" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%", type: "Index" },
    { ric: "EURUSD=X", name: "EUR/USD", last: 1.0789, change: "-0.05%", type: "Currency" },
    { ric: "GC=F", name: "Gold", last: 1931.20, change: "+0.22%", type: "Commodity" },
    { ric: "CL=F", name: "Crude Oil", last: 76.84, change: "-0.31%", type: "Commodity" },
    { ric: "^TNX", name: "10-Year Treasury Yield", last: 4.178, change: "+0.86%", type: "Bond" }
];

export type CrossAssetItem = {
    ric: string;
    name: string;
    last: number;
    change: string;
    type: "Index" | "ETF" | "Currency" | "Commodity" | "Bond";
};