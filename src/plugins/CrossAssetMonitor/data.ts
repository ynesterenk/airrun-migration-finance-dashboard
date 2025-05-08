export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00", assetClass: "Equity Index" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%", assetClass: "Equity Index" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%", assetClass: "Equity Index" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%", assetClass: "ETF" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%", assetClass: "Equity Index" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%", assetClass: "Equity Index" },
    { ric: "GC=F", name: "Gold Futures", last: 1937.10, change: "+0.52%", assetClass: "Commodity" },
    { ric: "CL=F", name: "Crude Oil WTI Futures", last: 72.05, change: "-1.23%", assetClass: "Commodity" },
    { ric: "EURUSD=X", name: "EUR/USD", last: 1.0874, change: "+0.15%", assetClass: "Currency" },
    { ric: "^TNX", name: "10-Year Treasury Yield", last: 4.178, change: "-0.95%", assetClass: "Bond" }
];

export type CrossAssetItem = typeof crossAssetData[0];