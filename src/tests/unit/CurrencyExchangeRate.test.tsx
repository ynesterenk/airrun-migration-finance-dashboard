import { render, screen } from '@testing-library/react';
import { CurrencyExchangeRate } from '@/plugins/CurrencyExchangeRate';

describe('CurrencyExchangeRate Plugin', () => {    it('renders without crashing', () => {
        render(<CurrencyExchangeRate />);
        // Verify that the component title is rendered
        expect(screen.getByText('Currency Exchange Rate')).toBeInTheDocument();
    });

    it('displays currency exchange data', () => {
        render(<CurrencyExchangeRate />);
        // Check for some currency pairs from the mock data
        expect(screen.getByText('EURUSD')).toBeInTheDocument();
        expect(screen.getByText('GBPUSD')).toBeInTheDocument();
    });
});
