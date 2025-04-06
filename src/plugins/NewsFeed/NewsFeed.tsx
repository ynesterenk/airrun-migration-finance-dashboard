import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Removed TabsContent as it wasn't used here
import { mockNews, NewsItem } from "./data";

export function NewsFeed() {
    return (
        <Card className="bg-gray-900 text-white col-span-2"> {/* Keep layout class for now */}
            <CardContent className="p-4">
                <h1 className="text-center text-xl text-gray-300 mb-4">News Feeds</h1>
                <Tabs defaultValue="ric" className="mb-4">
                    <TabsList>
                        <TabsTrigger value="ric">RIC</TabsTrigger>
                        <TabsTrigger value="topic">Topic</TabsTrigger>
                        <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                    </TabsList>
                    {/* No TabsContent needed if content doesn't change based on tabs */}
                </Tabs>
                <Input placeholder="Search news..." className="mb-4 bg-black border border-gray-600 text-white" />
                <ul>
                    {mockNews.map((news: NewsItem, idx: number) => (
                        <li key={idx} className="mb-2">
                            <span className="text-gray-400 font-medium">{news.title}</span> <span className="text-sm text-gray-400">({news.source}, {news.time})</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}