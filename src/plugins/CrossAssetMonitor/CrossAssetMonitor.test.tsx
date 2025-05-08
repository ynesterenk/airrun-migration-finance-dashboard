import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CrossAssetMonitor from './CrossAssetMonitor';
import { useAssetData } from './data';

jest.mock('./data', () => ({
  useAssetData: jest.fn(),
}));

describe('CrossAssetMonitor', () => {
  it('renders loading state', () => {
    (useAssetData as jest.Mock).mockReturnValue({ isLoading: true });
    render(<CrossAssetMonitor />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useAssetData as jest.Mock).mockReturnValue({ isError: true });
    render(<CrossAssetMonitor />);
    expect(screen.getByText('Error loading asset data')).toBeInTheDocument();
  });

  it('renders asset data', () => {
    const mockData = [
      { name: 'Asset1', price: 100, change: 1.5 },
      { name: 'Asset2', price: 200, change: -0.5 },
    ];
    (useAssetData as jest.Mock).mockReturnValue({ data: mockData, isLoading: false, isError: false });
    render(<CrossAssetMonitor />);
    expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
    expect(screen.getByText('Asset1')).toBeInTheDocument();
    expect(screen.getByText('Asset2')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('1.5%')).toBeInTheDocument();
    expect(screen.getByText('-0.5%')).toBeInTheDocument();
  });
});