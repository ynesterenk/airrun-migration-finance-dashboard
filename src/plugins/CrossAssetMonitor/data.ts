export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00", type: "Index" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%", type: "Index" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%", type: "Index" },
    { ric: "VOO.P", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%", type: "ETF" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%", type: "Index" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%", type: "Index" },
    { ric: "EUR=", name: "Euro/Dollar", last: 1.0921, change: "-0.25%", type: "Currency" },
    { ric: "GBP=", name: "Pound/Dollar", last: 1.2635, change: "+0.10%", type: "Currency" },
    { ric: "JPY=", name: "Yen/Dollar", last: 147.85, change: "-0.32%", type: "Currency" },
    { ric: "GC=F", name: "Gold", last: 2035.40, change: "+0.52%", type: "Commodity" },
    { ric: "CL=F", name: "Crude Oil", last: 76.84, change: "-1.15%", type: "Commodity" },
    { ric: "BTC=", name: "Bitcoin", last: 43215.50, change: "+2.30%", type: "Cryptocurrency" }
];

export type CrossAssetItem = {
    ric: string;
    name: string;
    last: number;
    change: string;
    type: "Index" | "ETF" | "Currency" | "Commodity" | "Cryptocurrency";
};