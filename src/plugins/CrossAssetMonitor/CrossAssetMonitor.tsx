import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { crossAssetData, CrossAssetItem } from './data';

const CrossAssetMonitor: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cross Asset Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset Name</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Asset Type</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Change</TableHead>
              <TableHead className="text-right">% Change</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {crossAssetData.map((item: CrossAssetItem) => (
              <TableRow key={item.id}>
                <TableCell>{item.assetName}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.assetType}</TableCell>
                <TableCell className="text-right">{item.price.toFixed(2)}</TableCell>
                <TableCell className={`text-right ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {item.change.toFixed(2)}
                </TableCell>
                <TableCell className={`text-right ${item.percentChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {item.percentChange.toFixed(2)}%
                </TableCell>
                <TableCell>{new Date(item.lastUpdated).toLocaleTimeString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CrossAssetMonitor;
