export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00%" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
    { ric: ".SPX", name: "S&P 500", last: 4137.29, change: "+0.37%" },
    { ric: ".DJI", name: "Dow Jones Industrial Average", last: 33978.08, change: "+0.41%" },
    { ric: ".IXIC", name: "NASDAQ Composite", last: 12166.27, change: "+0.31%" },
    { ric: ".N225", name: "Nikkei 225", last: 28856.44, change: "+1.20%" },
    { ric: ".GDAXI", name: "DAX", last: 15628.84, change: "+0.77%" },
    { ric: ".FCHI", name: "CAC 40", last: 7319.18, change: "+0.71%" },
    { ric: ".STOXX50E", name: "Euro Stoxx 50", last: 4257.98, change: "+0.62%" }
];

export type CrossAssetItem = typeof crossAssetData[0];