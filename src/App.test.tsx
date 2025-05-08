import { render, screen } from '@testing-library/react';
import App from './App';
import { CrossAssetMonitor } from './plugins/CrossAssetMonitor';

test('renders CrossAssetMonitor plugin', () => {
  render(<App />);
  const crossAssetMonitorElement = screen.getByTestId('cross-asset-monitor');
  expect(crossAssetMonitorElement).toBeInTheDocument();
});

test('CrossAssetMonitor plugin displays correctly', () => {
  render(<CrossAssetMonitor />);
  const titleElement = screen.getByText(/Cross Asset Monitor/i);
  expect(titleElement).toBeInTheDocument();
});