export const crossAssetData = [
    { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
    { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
    { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
    { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
    { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
    { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
];

export type CrossAssetItem = typeof crossAssetData[0];

export interface CurrencyRateItem {
    currency: string;
    flag: string;
    price: number;
    dayChange: number;
    percentChange: number;
}

export const mockCurrencyData: CurrencyRateItem[] = [
    {
        currency: "USD",
        flag: "🇺🇸",
        price: 1.0,
        dayChange: 0.0,
        percentChange: 0.0
    },
    {
        currency: "EUR",
        flag: "🇪🇺",
        price: 1.18,
        dayChange: 0.01,
        percentChange: 0.85
    },
    {
        currency: "JPY",
        flag: "🇯🇵",
        price: 0.0091,
        dayChange: -0.0001,
        percentChange: -1.09
    }
];