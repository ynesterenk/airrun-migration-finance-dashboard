import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts";
import { intradayData, IntradayDataItem } from "./data";

// Formatter for XAxis time ticks
const formatTimeTick = (tickItem: string) => {
    const date = new Date(tickItem);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
};

export function IntradayChart() {
    const chartDate = intradayData.length > 0 ? new Date(intradayData[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'}) : 'Intraday Chart';
    // Find min/max for Y-axis domain, or keep fixed domain
    // const prices = intradayData.map(d => d.price);
    // const yMin = Math.min(...prices) - 0.1;
    // const yMax = Math.max(...prices) + 0.1;
    const yDomain: [number, number] = [109, 112]; // Example: slightly adjusted fixed domain

    return (
        <Card className="bg-gray-900 text-white col-span-2"> {/* Keep layout class for now */}
            <CardContent className="p-4">
                {/* Removed redundant H1, kept H2 as title */}
                <h2 className="text-xl text-gray-300 mb-4 text-center">Intraday Chart</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                        data={intradayData}
                        margin={{ top: 5, right: 20, left: 0, bottom: 40 }} // Adjusted margins
                    >
                        <XAxis
                            dataKey="date"
                            stroke="#ccc"
                            tickFormatter={formatTimeTick}
                            interval="preserveStartEnd" // Show first and last tick
                            // Consider adding tickCount if too many ticks: tickCount={6}
                        >
                            <Label
                                value={chartDate} // Use dynamic date
                                position="insideBottom"
                                dy={25} // Adjust vertical position
                                style={{ fill: '#ccc', fontSize: 14 }}
                            />
                        </XAxis>
                        <YAxis
                            stroke="#ccc"
                            domain={yDomain} // Use calculated or fixed domain
                            tickFormatter={(val) => val.toFixed(2)}
                            width={50} // Ensure enough space for labels
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #4b5563', color: '#fff' }}
                            labelFormatter={(label) => new Date(label).toLocaleString()} // Format tooltip label
                            formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']} // Format tooltip value
                        />
                        <Line type="monotone" dataKey="price" stroke="#60a5fa" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}