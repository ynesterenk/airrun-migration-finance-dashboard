import { render, screen } from '@testing-library/react';
import { CrossAssetMonitor } from '@/plugins/CrossAssetMonitor';

describe('CrossAssetMonitor Plugin', () => {
    it('renders without crashing', () => {
        render(<CrossAssetMonitor />);
        // Verify that the component title is rendered
        expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
    });

    it('displays cross asset data', () => {
        render(<CrossAssetMonitor />);
        // Check for some asset RICs from the mock data
        expect(screen.getByText('.NDX')).toBeInTheDocument();
        expect(screen.getByText('NASDAQ 100')).toBeInTheDocument();
        expect(screen.getByText('.FTSE')).toBeInTheDocument();
        expect(screen.getByText('FTSE 100 INDEX')).toBeInTheDocument();
    });

    it('displays asset prices and changes with correct formatting', () => {
        render(<CrossAssetMonitor />);
        // Check for formatted prices and changes
        expect(screen.getByText('15010.43')).toBeInTheDocument();
        expect(screen.getByText('+0.00')).toBeInTheDocument();
        expect(screen.getByText('-0.14%')).toBeInTheDocument();
    });

    it('renders table structure correctly', () => {
        render(<CrossAssetMonitor />);
        // Check for table headers
        expect(screen.getByText('RIC')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Last')).toBeInTheDocument();
        expect(screen.getByText('Price Change')).toBeInTheDocument();
    });
}); 