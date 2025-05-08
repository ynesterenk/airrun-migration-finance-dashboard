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
    { ric: "^TNX", name: "10-Year Treasury Yield", last: 4.178, change: "+0.86%", type: "Bond" },
    { ric: "GBPUSD=X", name: "GBP/USD", last: 1.2635, change: "-0.12%", type: "Currency" },
    { ric: "BTC-USD", name: "Bitcoin USD", last: 43256.78, change: "+2.45%", type: "Cryptocurrency" },
    { ric: "^VIX", name: "CBOE Volatility Index", last: 13.78, change: "-3.23%", type: "Index" },
    { ric: "SI=F", name: "Silver", last: 23.41, change: "+0.56%", type: "Commodity" },
    { ric: "^GSPC", name: "S&P 500", last: 4567.89, change: "+0.75%", type: "Index" }
];

export type CrossAssetItem = {
    ric: string;
    name: string;
    last: number;
    change: string;
    type: "Index" | "ETF" | "Currency" | "Commodity" | "Bond" | "Cryptocurrency";
};