const extractPercentage = (changeStr) => {
    const match = changeStr.match(/([+-]?\d+\.?\d*)%/);
    return match ? parseFloat(match[1]) : 0;
};
export const mockCrossAssetData = [
    {
        ric: ".NDX",
        name: "NASDAQ 100",
        last: 15010.43,
        change: "+0.00",
        percentChange: extractPercentage("+0.00%")
    },
    {
        ric: ".FTSE",
        name: "FTSE 100 INDEX",
        last: 7455.68,
        change: "-0.14%",
        percentChange: extractPercentage("-0.14%")
    },
    {
        ric: ".HSI",
        name: "HANG SENG INDEX",
        last: 16993.44,
        change: "-2.08%",
        percentChange: extractPercentage("-2.08%")
    },
    {
        ric: ".VOO",
        name: "VANGUARD S&P 500 ETF",
        last: 511.14,
        change: "+1.08%",
        percentChange: extractPercentage("+1.08%")
    },
    {
        ric: ".DAX",
        name: "DAX INDEX",
        last: 22539.61,
        change: "+3.08%",
        percentChange: extractPercentage("+3.08%")
    },
    {
        ric: ".PX1",
        name: "CAC 40 INDEX",
        last: 7876.36,
        change: "-2.18%",
        percentChange: extractPercentage("-2.18%")
    }
];
