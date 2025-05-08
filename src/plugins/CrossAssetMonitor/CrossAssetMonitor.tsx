import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { crossAssetData, CrossAssetItem } from "./data";

const getChangeColor = (change: string): string => {
    return change.startsWith("+") ? "text-green-400" : "text-red-400";
};

export function CrossAssetMonitor() {
    return (
        <Card className="bg-gray-900 text-white">
            <CardContent className="p-4">
                <h2 className="text-xl text-gray-300 mb-4 text-center">Cross Asset Monitor</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-left text-gray-400">RIC</TableHead>
                            <TableHead className="text-left text-gray-400">Name</TableHead>
                            <TableHead className="text-right text-gray-400">Last</TableHead>
                            <TableHead className="text-right text-gray-400">Change</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {crossAssetData.map((item: CrossAssetItem) => (
                            <TableRow key={item.ric} className="border-b border-gray-800">
                                <TableCell className="text-white">{item.ric}</TableCell>
                                <TableCell className="text-blue-400">{item.name}</TableCell>
                                <TableCell className="text-right text-blue-400">{item.last.toFixed(2)}</TableCell>
                                <TableCell className={`text-right ${getChangeColor(item.change)}`}>{item.change}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}