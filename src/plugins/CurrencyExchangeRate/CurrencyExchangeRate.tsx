import { Card, CardContent } from "@/components/ui/card";
import { mockCurrencyData, CurrencyRateItem } from "./data";

// Helper function to determine text color based on value
const getValueColor = (value: number): string => {
    return value >= 0 ? "text-green-400" : "text-red-400";
};

// Helper function to format the percentage change string
const formatPercentChange = (value: number): string => {
    const sign = value >= 0 ? "+" : "";
    return `${sign}${value.toFixed(2)}%`;
};

export function CurrencyExchangeRate() {
    return (
        <Card className="bg-gray-900 text-white"> {/* Same layout slot as CrossAsset */}
            <CardContent className="p-4">
                <h2 className="text-xl text-gray-300 mb-4 text-center">Currency Exchange Rate</h2>
                <table className="w-full text-sm">
                    <thead className="text-gray-400 border-b border-gray-700">
                    <tr>
                        <th className="text-left py-2 px-2">Flag</th>
                        <th className="text-left py-2 px-2">Currency</th>
                        <th className="text-right py-2 px-2">Price</th>
                        <th className="text-right py-2 px-2">Day</th>
                        <th className="text-right py-2 px-2">Change %</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mockCurrencyData.map((item: CurrencyRateItem) => ( // Implicit return
                        <tr key={item.currency} className="border-b border-gray-800">
                            <td className="py-2 px-2 text-xl">{item.flag}</td> {/* Flag placeholder */}
                            <td className="py-2 px-2 text-blue-400">{item.currency}</td>
                            <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>
                                {item.price.toFixed(item.currency === 'USDJPY' ? 3 : 5)} {/* Adjust precision */}
                            </td>
                            <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>
                                {item.dayChange.toFixed(item.currency === 'USDJPY' ? 3 : 5)} {/* Adjust precision */}
                            </td>
                            <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>
                                {formatPercentChange(item.percentChange)}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}