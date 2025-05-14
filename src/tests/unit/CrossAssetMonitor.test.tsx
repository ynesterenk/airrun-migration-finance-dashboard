import React from 'react';
import { render, screen } from '@testing-library/react';
import CrossAssetMonitor from '@/plugins/CrossAssetMonitor/CrossAssetMonitor';
import { crossAssetData } from '@/plugins/CrossAssetMonitor/data';

// Mock the data to ensure consistent tests
jest.mock('@/plugins/CrossAssetMonitor/data', () => ({
  ...jest.requireActual('@/plugins/CrossAssetMonitor/data'), // Import and retain default exports
  crossAssetData: [
    {
      id: "TEST1",
      assetName: "Test Asset 1",
      region: "US",
      assetType: "Stock",
      price: 100.00,
      change: 5.00,
      percentChange: 5.00,
      lastUpdated: "2023-01-01T12:00:00.000Z",
    },
    {
      id: "TEST2",
      assetName: "Test Asset 2",
      region: "UK",
      assetType: "ETF",
      price: 200.00,
      change: -2.50,
      percentChange: -1.25,
      lastUpdated: "2023-01-01T13:00:00.000Z",
    },
  ],
}));

describe('CrossAssetMonitor Plugin', () => {
  beforeEach(() => {
    render(<CrossAssetMonitor />);
  });

  test('renders the plugin title', () => {
    expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
  });

  test('renders table headers correctly', () => {
    expect(screen.getByText('Asset Name')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();
    expect(screen.getByText('Asset Type')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    // 'Change' and '% Change' are duplicated in the table, so we use getAllByText
    expect(screen.getAllByText('Change')[0]).toBeInTheDocument(); 
    expect(screen.getAllByText('% Change')[0]).toBeInTheDocument();
    expect(screen.getByText('Last Updated')).toBeInTheDocument();
  });

  test('renders the correct number of data rows', () => {
    // The mock data has 2 items
    // Header row is not counted by querySelectorAll on tbody tr
    const rows = screen.getAllByRole('row');
    // Expect 1 header row + 2 data rows
    expect(rows.length).toBe(3); 
  });

  test('displays data correctly in table cells for the first asset', () => {
    const mockedDataFirstItem = crossAssetData[0];
    expect(screen.getByText(mockedDataFirstItem.assetName)).toBeInTheDocument();
    expect(screen.getByText(mockedDataFirstItem.region)).toBeInTheDocument();
    expect(screen.getByText(mockedDataFirstItem.assetType)).toBeInTheDocument();
    expect(screen.getByText(mockedDataFirstItem.price.toFixed(2))).toBeInTheDocument();
    expect(screen.getByText(mockedDataFirstItem.change.toFixed(2))).toBeInTheDocument();
    expect(screen.getByText(`${mockedDataFirstItem.percentChange.toFixed(2)}%`)).toBeInTheDocument();
    expect(screen.getByText(new Date(mockedDataFirstItem.lastUpdated).toLocaleTimeString())).toBeInTheDocument();
  });

  test('applies correct color for positive change', () => {
    // Test Asset 1 has a positive change
    const changeCell = screen.getByText('5.00'); // Change value for Test Asset 1
    expect(changeCell).toHaveClass('text-green-500');
  });

  test('applies correct color for negative change', () => {
    // Test Asset 2 has a negative change
    const changeCell = screen.getByText('-2.50'); // Change value for Test Asset 2
    expect(changeCell).toHaveClass('text-red-500');
  });
});
