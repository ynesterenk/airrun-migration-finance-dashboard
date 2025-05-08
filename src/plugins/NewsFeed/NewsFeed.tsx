import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockNews, NewsItem } from "./data";

export function NewsFeed() {
    return (
        <Card className="bg-gray-900 text-white h-full">
            <CardContent className="p-4 h-full flex flex-col">
                <h1 className="text-center text-xl text-gray-300 mb-4">News Feeds</h1>
                <Tabs defaultValue="ric" className="mb-4">
                    <TabsList className="w-full">
                        <TabsTrigger value="ric" className="flex-1">RIC</TabsTrigger>
                        <TabsTrigger value="topic" className="flex-1">Topic</TabsTrigger>
                        <TabsTrigger value="portfolio" className="flex-1">Portfolio</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Input placeholder="Search news..." className="mb-4 bg-black border border-gray-600 text-white" />
                <ul className="overflow-y-auto flex-grow">
                    {mockNews.map((news: NewsItem, idx: number) => (
                        <li key={idx} className="mb-2 last:mb-0">
                            <span className="text-gray-400 font-medium">{news.title}</span> <span className="text-sm text-gray-400">({news.source}, {news.time})</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}