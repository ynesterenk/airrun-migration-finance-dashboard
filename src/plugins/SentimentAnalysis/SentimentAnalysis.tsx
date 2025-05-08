import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { sentimentData } from './data';

const SentimentAnalysis: React.FC = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Market Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium">{item.asset}</span>
              <div className="flex items-center">
                <span className={`mr-2 ${item.sentiment > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {item.sentiment > 0 ? '↑' : '↓'}
                </span>
                <span>{item.sentiment.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;