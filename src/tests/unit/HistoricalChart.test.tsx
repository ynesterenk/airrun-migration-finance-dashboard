import { render, screen } from '@testing-library/react';
import { HistoricalChart } from '@/plugins/HistoricalChart';

describe('HistoricalChart Plugin', () => {
    it('renders without crashing', () => {
        render(<HistoricalChart />);
        // Verify that the component renders
        expect(screen.getByText('3-Month Price History')).toBeInTheDocument();
    });

    it('displays the chart container', () => {
        render(<HistoricalChart />);
        // Check for the chart container
        const chartContainer = screen.getByTestId('historical-chart');
        expect(chartContainer).toBeInTheDocument();
    });
});
