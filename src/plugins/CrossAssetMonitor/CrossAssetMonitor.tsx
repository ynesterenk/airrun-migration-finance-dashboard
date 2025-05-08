import { Card, CardContent } from "@/components/ui/card";
import { crossAssetData, CrossAssetItem } from "./data";
const getChangeColor = (change: string): string => {
    return change.startsWith("+") ? "text-green-400" : "text-red-400";
};
export function CrossAssetMonitor() {
    return (
        <Card className="bg-gray-900 text-white">
            <CardContent className="p-4">
                <h2 className="text-xl text-gray-300 mb-4 text-center">Cross Asset Monitor</h2>
                <table className="w-full text-sm">
                    <thead className="text-gray-400 border-b border-gray-700">
                    <tr>
                        <th className="text-left py-2 px-1">RIC</th>
                        <th className="text-left py-2 px-1">Name</th>
                        <th className="text-right py-2 px-1">Last</th>
                        <th className="text-right py-2 px-1">Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    {crossAssetData.map((item: CrossAssetItem) => (
                        <tr key={item.ric} className="border-b border-gray-800">
                            <td className="text-white py-1 px-1">{item.ric}</td>
                            <td className={`py-1 px-1 text-blue-400`}>{item.name}</td>
                            <td className={`text-right py-1 px-1 text-blue-400`}>{item.last.toFixed(2)}</td>
                            <td className={`text-right py-1 px-1 ${getChangeColor(item.change)}`}>{item.change}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}