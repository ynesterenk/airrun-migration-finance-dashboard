import { render, screen } from '@testing-library/react';
import { CrossAssetMonitor } from '@/plugins/CrossAssetMonitor';

describe('CrossAssetMonitor Plugin', () => {
    it('renders without crashing', () => {
        render(<CrossAssetMonitor />);
        // Verify that the component title is rendered
        expect(screen.getByText('Cross Asset Monitor')).toBeInTheDocument();
    });

    it('displays asset data', () => {
        render(<CrossAssetMonitor />);
        // Check for some assets from the mock data
        expect(screen.getByText('.NDX')).toBeInTheDocument();
        expect(screen.getByText('NASDAQ 100')).toBeInTheDocument();
        expect(screen.getByText('.FTSE')).toBeInTheDocument();
        expect(screen.getByText('FTSE 100 INDEX')).toBeInTheDocument();
    });

    it('displays table headers correctly', () => {
        render(<CrossAssetMonitor />);
        // Check for table headers
        expect(screen.getByText('RIC')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Last')).toBeInTheDocument();
        expect(screen.getByText('Price Change')).toBeInTheDocument();
    });

    it('displays asset prices and changes', () => {
        render(<CrossAssetMonitor />);
        // Check for some specific values from the mock data
        expect(screen.getByText('15010.43')).toBeInTheDocument();
        expect(screen.getByText('+0.00')).toBeInTheDocument();
        expect(screen.getByText('-0.14%')).toBeInTheDocument();
        expect(screen.getByText('+3.08%')).toBeInTheDocument();
    });
}); 