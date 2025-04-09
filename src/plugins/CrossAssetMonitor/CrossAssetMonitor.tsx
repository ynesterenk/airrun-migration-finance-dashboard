import { Card, CardContent } from '@/components/ui/card';
import { assetData, AssetItem } from './data';

// Helper function to determine text color based on value
const getValueColor = (value: number): string => {
    return value >= 0 ? 'text-green-400' : 'text-red-400';
};

// Helper function to format the percentage change string
const formatPercentChange = (value: number): string => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(2)}%`;
};

export function CrossAssetMonitor() {
    return (
        <Card className='bg-gray-900 text-white'>
            <CardContent className='p-4'>
                <h2 className='text-xl text-gray-300 mb-4 text-center'>Cross Asset Monitor</h2>
                <table className='w-full text-sm'>
                    <thead className='text-gray-400 border-b border-gray-700'>
                        <tr>
                            <th className='text-left py-2 px-2'>Asset</th>
                            <th className='text-right py-2 px-2'>Price</th>
                            <th className='text-right py-2 px-2'>Day Change</th>
                            <th className='text-right py-2 px-2'>Change %</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assetData.map((item: AssetItem) => (
                            <tr key={item.asset} className='border-b border-gray-800'>
                                <td className='py-2 px-2 text-blue-400'>{item.asset}</td>
                                <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>{item.price.toFixed(2)}</td>
                                <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>{item.dayChange.toFixed(2)}</td>
                                <td className={`text-right py-2 px-2 ${getValueColor(item.percentChange)}`}>{formatPercentChange(item.percentChange)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardContent>
        </Card>
    );
}