import { Card, CardContent } from "components/ui/card";
import { Input } from "components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from "recharts";
//import { motion } from "framer-motion";

const mockNews = [
  { title: "Europe’s Stock Surge Outpaces Wall Street in Historic Run", source: "Bloomberg", time: "10:35 AM" },
  { title: "Aid rushes into Myanmar after earthquake kills over 1,600, ravages cities", source: "Reuters", time: "10:15 AM" },
  { title: "Trump tells NBC he 'couldn't care less' if car makers hike prices due to tariffs", source: "CNBC", time: "09:50 AM" }
];

const crossAssetData = [
  { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
  { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
  { ric: ".HSI", name: "HANG SENG INDEX", last: 16993.44, change: "-2.08%" },
  { ric: ".VOO", name: "VANGUARD S&P 500 ETF", last: 511.14, change: "+1.08%" },
  { ric: ".DAX", name: "DAX INDEX", last: 22539.61, change: "+3.08%" },
  { ric: ".PX1", name: "CAC 40 INDEX", last: 7876.36, change: "-2.18%" }
];

const priceHistory = [
  { date: "2025-01-03", price: 144.47 },
  { date: "2025-01-06", price: 149.43 },
  { date: "2025-01-07", price: 140.14 },
  { date: "2025-01-08", price: 140.11 },
  { date: "2025-01-10", price: 135.91 },
  { date: "2025-01-13", price: 133.23 },
  { date: "2025-01-14", price: 131.76 },
  { date: "2025-01-15", price: 136.24 },
  { date: "2025-01-16", price: 133.57 },
  { date: "2025-01-17", price: 137.71 },
  { date: "2025-01-21", price: 135.87 },
  { date: "2025-01-22", price: 136.56 },
  { date: "2025-01-23", price: 134.93 },
  { date: "2025-01-24", price: 138.33 },
  { date: "2025-01-27", price: 137.80 },
  { date: "2025-01-28", price: 135.64 },
  { date: "2025-01-29", price: 135.34 },
  { date: "2025-01-30", price: 132.99 },
  { date: "2025-01-31", price: 134.86 },
  { date: "2025-02-03", price: 133.67 },
  { date: "2025-02-04", price: 134.53 },
  { date: "2025-02-05", price: 133.41 },
  { date: "2025-02-06", price: 132.24 },
  { date: "2025-02-07", price: 133.16 },
  { date: "2025-02-10", price: 129.60 },
  { date: "2025-02-11", price: 130.35 },
  { date: "2025-02-12", price: 131.49 },
  { date: "2025-02-13", price: 130.88 },
  { date: "2025-02-14", price: 131.13 },
  { date: "2025-02-18", price: 129.78 },
  { date: "2025-02-19", price: 130.99 },
  { date: "2025-02-20", price: 132.28 },
  { date: "2025-02-21", price: 133.99 },
  { date: "2025-02-24", price: 134.77 },
  { date: "2025-02-25", price: 135.90 },
  { date: "2025-02-26", price: 137.01 },
  { date: "2025-02-27", price: 136.93 },
  { date: "2025-02-28", price: 137.63 },
  { date: "2025-03-03", price: 138.31 },
  { date: "2025-03-04", price: 139.20 },
  { date: "2025-03-05", price: 140.15 },
  { date: "2025-03-06", price: 141.76 },
  { date: "2025-03-07", price: 142.22 },
  { date: "2025-03-10", price: 144.76 },
  { date: "2025-03-11", price: 144.26 },
  { date: "2025-03-12", price: 146.61 },
  { date: "2025-03-13", price: 148.23 },
  { date: "2025-03-14", price: 147.35 },
  { date: "2025-03-17", price: 150.17 },
  { date: "2025-03-18", price: 150.25 },
  { date: "2025-03-19", price: 148.33 },
  { date: "2025-03-20", price: 148.51 },
  { date: "2025-03-21", price: 149.55 },
  { date: "2025-03-24", price: 151.97 },
  { date: "2025-03-25", price: 151.08 },
  { date: "2025-03-26", price: 147.46 },
  { date: "2025-03-27", price: 144.42 },
  { date: "2025-03-28", price: 141.67 }
];

const intradayData = [{"date": "2025-03-28T09:30:00-04:00", "price": 111.66500091552734}, {"date": "2025-03-28T09:40:00-04:00", "price": 111.981201171875}, {"date": "2025-03-28T09:50:00-04:00", "price": 111.6500015258789}, {"date": "2025-03-28T10:00:00-04:00", "price": 111.2698974609375}, {"date": "2025-03-28T10:10:00-04:00", "price": 110.30999755859375}, {"date": "2025-03-28T10:20:00-04:00", "price": 109.93499755859375}, {"date": "2025-03-28T10:30:00-04:00", "price": 109.45999908447266}, {"date": "2025-03-28T10:40:00-04:00", "price": 109.9749984741211}, {"date": "2025-03-28T10:50:00-04:00", "price": 109.88500213623047}, {"date": "2025-03-28T11:00:00-04:00", "price": 109.44499969482422}, {"date": "2025-03-28T11:10:00-04:00", "price": 109.97010040283203}, {"date": "2025-03-28T11:20:00-04:00", "price": 109.53500366210938}, {"date": "2025-03-28T11:30:00-04:00", "price": 109.95999908447266}, {"date": "2025-03-28T11:40:00-04:00", "price": 110.07009887695312}, {"date": "2025-03-28T11:50:00-04:00", "price": 109.60070037841797}, {"date": "2025-03-28T12:00:00-04:00", "price": 109.73500061035156}, {"date": "2025-03-28T12:10:00-04:00", "price": 109.71990203857422}, {"date": "2025-03-28T12:20:00-04:00", "price": 109.40499877929688}, {"date": "2025-03-28T12:30:00-04:00", "price": 110.03500366210938}, {"date": "2025-03-28T12:40:00-04:00", "price": 109.77999877929688}, {"date": "2025-03-28T12:50:00-04:00", "price": 109.875}, {"date": "2025-03-28T13:00:00-04:00", "price": 109.54499816894531}, {"date": "2025-03-28T13:10:00-04:00", "price": 109.52110290527344}, {"date": "2025-03-28T13:20:00-04:00", "price": 109.7699966430664}, {"date": "2025-03-28T13:30:00-04:00", "price": 109.61499786376953}, {"date": "2025-03-28T13:40:00-04:00", "price": 109.63999938964844}, {"date": "2025-03-28T13:50:00-04:00", "price": 109.63829803466797}, {"date": "2025-03-28T14:00:00-04:00", "price": 109.79499816894531}, {"date": "2025-03-28T14:10:00-04:00", "price": 110.1449966430664}, {"date": "2025-03-28T14:20:00-04:00", "price": 110.01499938964844}, {"date": "2025-03-28T14:30:00-04:00", "price": 110.12000274658203}, {"date": "2025-03-28T14:40:00-04:00", "price": 110.04000091552734}, {"date": "2025-03-28T14:50:00-04:00", "price": 110.13999938964844}, {"date": "2025-03-28T15:00:00-04:00", "price": 110.41500091552734}, {"date": "2025-03-28T15:10:00-04:00", "price": 110.11499786376953}, {"date": "2025-03-28T15:20:00-04:00", "price": 110.16600036621094}, {"date": "2025-03-28T15:30:00-04:00", "price": 109.62000274658203}, {"date": "2025-03-28T15:40:00-04:00", "price": 109.56500244140625}, {"date": "2025-03-28T15:50:00-04:00", "price": 109.6050033569336}];
/*const intradayData = Array.from({ length: 9 }, (_, i) => {
  const hour = 9 + i;
  return {
    time: `${hour}:00`,
    price: 130 + Math.sin(i / 2.5) * 4 + Math.random() * 2
  };
});*/


export default function FinanceAppMockup() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-black text-white min-h-screen">
      <Card className="bg-gray-900 text-white col-span-2">
        <CardContent className="p-4">
          <h1 className="text-center text-xl text-gray-300 mb-4">News Feeds</h1>
          <Tabs defaultValue="ric" className="mb-4">
            <TabsList>
              <TabsTrigger value="ric">RIC</TabsTrigger>
              <TabsTrigger value="topic">Topic</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            </TabsList>
          </Tabs>
          <Input placeholder="Search news..." className="mb-4 bg-black border border-gray-600 text-white" />
          <ul>
            {mockNews.map((news, idx) => (
              <li key={idx} className="mb-2">
                <span className="text-gray-400 font-medium">{news.title}</span> <span className="text-sm text-gray-400">({news.source}, {news.time})</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-white">
        <CardContent className="p-4">
          <h1 className="text-center text-xl text-gray-300 mb-4">Cross Asset</h1>
          <h2 className="text-xl text-gray-300 mb-4">Cross Asset Monitor</h2>
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="text-left">RIC</th>
                <th className="text-left">Name</th>
                <th className="text-right">Last</th>
                <th className="text-right">Price Change</th>
              </tr>
            </thead>
            <tbody>
              {crossAssetData.map((item, idx) => {
                const nameColor = idx === 0 ? "text-blue-400" : "text-orange-400";
                const priceColor = idx === 0 ? "text-blue-400" : "text-orange-400";
                const changeColor = item.change.startsWith("+") ? "text-green-400" : "text-red-400";
                return (
                  <tr key={idx} className="border-b border-gray-800">
                    <td className="text-white">{item.ric}</td>
                    <td className={`${nameColor}`}>{item.name}</td>
                    <td className={`text-right ${priceColor}`}>{item.last.toFixed(2)}</td>
                    <td className={`text-right ${changeColor}`}>{item.change}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-white">
        <CardContent className="p-4">
          <h1 className="text-center text-xl text-gray-300 mb-4">Historical Chart</h1>
          <h2 className="text-xl text-gray-300 mb-4">3-Month Price History</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={priceHistory}>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#4ade80', color: '#fff' }} />
              <Line type="monotone" dataKey="price" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 text-white col-span-2">
        <CardContent className="p-4">
          <h1 className="text-center text-xl text-gray-300 mb-4">Intra Day Chart</h1>
          <h2 className="text-xl text-gray-300 mb-4">Intraday Chart</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={intradayData}
                margin={{ top: 10, right: 30, left: 0, bottom: 40 }}>
              <XAxis dataKey="time" stroke="#ccc">
           <Label
              value="01 Mar 2025"
              position="insideBottom"
              dy={20}
             style={{ fill: '#ccc', fontSize: 14 }}
              />
          </XAxis>
              <YAxis stroke="#ccc" domain={[108, 110]} tickFormatter={(val) => val.toFixed(2)} />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#60a5fa', color: '#fff' }} />
              <Line type="monotone" dataKey="price" stroke="#60a5fa" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
