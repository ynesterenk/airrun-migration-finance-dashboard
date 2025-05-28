import { Card, CardContent } from "@/components/ui/card";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table";
import { mockAssetData, AssetItem } from "./data";

// Helper function to determine text color based on change value
const getChangeColor = (changeValue: number | undefined): string => {
    if (!changeValue || changeValue === 0) return "text-gray-400";
    return changeValue > 0 ? "text-green-400" : "text-red-400";
};

// Helper function to format RIC with styling similar to original
const formatRIC = (ric: string): string => {
    return ric;
};

// Helper function to format asset name with styling
const formatName = (name: string): string => {
    return name;
};

// Helper function to format last price with styling
const formatLast = (last: number): string => {
    return last.toFixed(2);
};

export function CrossAssetMonitor() {
    return (
        <Card className="bg-gray-900 text-white">
            <CardContent className="p-4">
                <h2 className="text-xl text-gray-300 mb-4 text-center">Cross Asset Monitor</h2>
                <Table>
                    <TableHeader>
                        <TableRow className="border-b border-gray-700">
                            <TableHead className="text-gray-400 text-left py-2 px-2">RIC</TableHead>
                            <TableHead className="text-gray-400 text-left py-2 px-2">Name</TableHead>
                            <TableHead className="text-gray-400 text-right py-2 px-2">Last</TableHead>
                            <TableHead className="text-gray-400 text-right py-2 px-2">Price Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockAssetData.map((item: AssetItem) => (
                            <TableRow key={item.ric} className="border-b border-gray-800">
                                <TableCell className="py-2 px-2 text-gray-300">
                                    {formatRIC(item.ric)}
                                </TableCell>
                                <TableCell className="py-2 px-2 text-blue-400">
                                    {formatName(item.name)}
                                </TableCell>
                                <TableCell className="text-right py-2 px-2 text-orange-400">
                                    {formatLast(item.last)}
                                </TableCell>
                                <TableCell className={`text-right py-2 px-2 ${getChangeColor(item.changeValue)}`}>
                                    {item.change}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
} 