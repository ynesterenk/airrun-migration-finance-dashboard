import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAssetData } from './data';

export const CrossAssetMonitor: React.FC = () => {
  const { data: assets, loading, error } = useAssetData();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cross Asset Monitor</CardTitle>
        </CardHeader>
        <CardContent>Loading assets...</CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Cross Asset Monitor</CardTitle>
        </CardHeader>
        <CardContent className="text-destructive">{error.message}</CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cross Asset Monitor</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>RIC</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Last</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.ric}>
                <TableCell>{asset.ric}</TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell className="text-right">{asset.last.toFixed(2)}</TableCell>
                <TableCell className={`text-right ${
                  asset.change.startsWith('+') ? 'text-green-600' : 
                  asset.change.startsWith('-') ? 'text-red-600' : 
                  'text-muted-foreground'
                }`}>
                  {asset.change}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
