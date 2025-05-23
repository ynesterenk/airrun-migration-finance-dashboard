import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockCrossAssetData, CrossAssetItem } from "./data";

// Helper function to determine text color based on value
const getValueColor = (value: number): string => {
    return value >= 0 ? "text-green-400" : "text-red-400";
};

// Helper function to format the price change string
const formatPriceChange = (change: string): string => {
    return change;
};

// Helper function to format numbers with appropriate precision
const formatPrice = (price: number): string => {
    return price.toFixed(2);
};

export function CrossAssetMonitor() {
    return (
        <Card className="bg-gray-900 text-white">
            <CardContent className="p-4">
                <h2 className="text-xl text-gray-300 mb-4 text-center">Cross Asset Monitor</h2>
                <Table>
                    <TableHeader>
                        <TableRow className="border-gray-700">
                            <TableHead className="text-gray-400 text-left">RIC</TableHead>
                            <TableHead className="text-gray-400 text-left">Name</TableHead>
                            <TableHead className="text-gray-400 text-right">Last</TableHead>
                            <TableHead className="text-gray-400 text-right">Price Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockCrossAssetData.map((item: CrossAssetItem) => (
                            <TableRow key={item.ric} className="border-gray-800">
                                <TableCell className="text-blue-400 font-mono">
                                    {item.ric}
                                </TableCell>
                                <TableCell className="text-white">
                                    {item.name}
                                </TableCell>
                                <TableCell className={`text-right ${getValueColor(item.percentChange)}`}>
                                    {formatPrice(item.last)}
                                </TableCell>
                                <TableCell className={`text-right ${getValueColor(item.percentChange)}`}>
                                    {formatPriceChange(item.change)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
} 