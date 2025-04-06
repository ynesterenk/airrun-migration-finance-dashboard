import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { priceHistory, PriceHistoryItem } from "./data";

// Basic date formatter for XAxis - customize as needed
const formatDateTick = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export function HistoricalChart() {
    return (
        <Card className="bg-gray-900 text-white"> {/* Keep layout class for now */}
            <CardContent className="p-4">
                {/* Removed redundant H1, kept H2 as title */}
                <h2 className="text-xl text-gray-300 mb-4 text-center">3-Month Price History</h2>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={priceHistory}>
                        <XAxis
                            dataKey="date"
                            stroke="#ccc"
                            tickFormatter={formatDateTick}
                            // Add interval or tickCount if too crowded
                            // interval="preserveStartEnd"
                            // tickCount={5}
                        />
                        <YAxis stroke="#ccc" domain={['auto', 'auto']} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563', color: '#fff' }}
                            labelFormatter={(label) => new Date(label).toLocaleDateString()} // Format tooltip label
                            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']} // Format tooltip value
                        />
                        <Line type="monotone" dataKey="price" stroke="#4ade80" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}