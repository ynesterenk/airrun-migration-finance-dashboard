import { render, screen } from '@testing-library/react';
import { IntradayChart } from '@/plugins/IntradayChart';

describe('IntradayChart Plugin', () => {
    it('renders without crashing', () => {
        render(<IntradayChart />);
        // Verify that the component renders
        expect(screen.getByText('Intraday Chart')).toBeInTheDocument();
    });    it('displays the chart container', () => {
        render(<IntradayChart />);
        // Check for the chart container
        const chartContainer = screen.getByTestId('intraday-chart');
        expect(chartContainer).toBeInTheDocument();
    });
});
