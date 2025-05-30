import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-gray-700">
                            <TableHead className="text-left text-gray-400">Flag</TableHead>
                            <TableHead className="text-left text-gray-400">Currency</TableHead>
                            <TableHead className="text-right text-gray-400">Price</TableHead>
                            <TableHead className="text-right text-gray-400">Day</TableHead>
                            <TableHead className="text-right text-gray-400">Change %</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockCurrencyData.map((item: CurrencyRateItem) => (
                            <TableRow key={item.currency} className="border-b border-gray-800">
                                <TableCell className="text-xl">{item.flag}</TableCell>
                                <TableCell className="text-blue-400">{item.currency}</TableCell>
                                <TableCell className={`text-right ${getValueColor(item.percentChange)}`}>
                                    {item.price.toFixed(item.currency === 'USDJPY' ? 3 : 5)}
                                </TableCell>
                                <TableCell className={`text-right ${getValueColor(item.percentChange)}`}>
                                    {item.dayChange.toFixed(item.currency === 'USDJPY' ? 3 : 5)}
                                </TableCell>
                                <TableCell className={`text-right ${getValueColor(item.percentChange)}`}>
                                    {formatPercentChange(item.percentChange)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}