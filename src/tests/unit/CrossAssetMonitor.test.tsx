import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CrossAssetMonitor } from '@/plugins/CrossAssetMonitor';
import { useAssetData } from '@/plugins/CrossAssetMonitor/data';

// Mock the useAssetData hook
jest.mock('@/plugins/CrossAssetMonitor/data', () => ({
  useAssetData: jest.fn(),
}));

const mockAssets = [
  { ric: ".NDX", name: "NASDAQ 100", last: 15010.43, change: "+0.00" },
  { ric: ".FTSE", name: "FTSE 100 INDEX", last: 7455.68, change: "-0.14%" },
];

describe('CrossAssetMonitor', () => {
  const mockedUseAssetData = useAssetData as jest.MockedFunction<typeof useAssetData>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays loading state', () => {
    mockedUseAssetData.mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Loading assets...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    mockedUseAssetData.mockReturnValue({
      data: [],
      loading: false,
      error: new Error('Failed to load assets'),
    });

    render(<CrossAssetMonitor />);
    expect(screen.getByText('Failed to load assets')).toBeInTheDocument();
  });

  it('displays asset data', async () => {
    mockedUseAssetData.mockReturnValue({
      data: mockAssets,
      loading: false,
      error: null,
    });

    render(<CrossAssetMonitor />);

    expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
    expect(screen.getByText('NASDAQ 100')).toBeInTheDocument();
    expect(screen.getByText('FTSE 100 INDEX')).toBeInTheDocument();
    expect(screen.getByText('15010.43')).toBeInTheDocument();
    expect(screen.getByText('-0.14%')).toBeInTheDocument();
  });

  it('shows correct table headers', () => {
    mockedUseAssetData.mockReturnValue({
      data: mockAssets,
      loading: false,
      error: null,
    });

    render(<CrossAssetMonitor />);

    expect(screen.getByText('RIC')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Last')).toBeInTheDocument();
    expect(screen.getByText('Change')).toBeInTheDocument();
  });

  it('applies correct styling to positive and negative changes', () => {
    mockedUseAssetData.mockReturnValue({
      data: mockAssets,
      loading: false,
      error: null,
    });

    render(<CrossAssetMonitor />);

    const positiveChange = screen.getByText('+0.00').parentElement;
    const negativeChange = screen.getByText('-0.14%').parentElement;

    expect(positiveChange).toHaveClass('text-muted-foreground');
    expect(negativeChange).toHaveClass('text-red-600');
  });
});
