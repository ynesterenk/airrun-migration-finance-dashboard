import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CrossAssetMonitor from './CrossAssetMonitor';
import { useAssetData } from './data';

jest.mock('./data');

const mockAssetData = [
  { symbol: 'AAPL', price: 150.5, change: 1.2 },
  { symbol: 'GOOGL', price: 2800.75, change: -0.5 },
];

describe('CrossAssetMonitor', () => {
  it('renders loading state', () => {
    (useAssetData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useAssetData as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error('Failed to fetch data'),
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });

  it('renders asset data correctly', async () => {
    (useAssetData as jest.Mock).mockReturnValue({
      data: mockAssetData,
      isLoading: false,
      error: null,
    });

    render(<CrossAssetMonitor />);

    await waitFor(() => {
      expect(screen.getByText('Cross-Asset Monitor')).toBeInTheDocument();
      expect(screen.getByText('AAPL')).toBeInTheDocument();
      expect(screen.getByText('150.5')).toBeInTheDocument();
      expect(screen.getByText('1.2%')).toBeInTheDocument();
      expect(screen.getByText('GOOGL')).toBeInTheDocument();
      expect(screen.getByText('2800.75')).toBeInTheDocument();
      expect(screen.getByText('-0.5%')).toBeInTheDocument();
    });
  });
});