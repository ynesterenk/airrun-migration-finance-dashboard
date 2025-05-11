import { render, screen } from '@testing-library/react';
import { NewsFeed } from '@/plugins/NewsFeed';

describe('NewsFeed Plugin', () => {    it('renders without crashing', () => {
        render(<NewsFeed />);
        // Verify that the component title is rendered
        expect(screen.getByText('News Feeds')).toBeInTheDocument();
    });

    it('displays news items', () => {
        render(<NewsFeed />);
        // Check for news items container
        const newsContainer = screen.getByRole('list');
        expect(newsContainer).toBeInTheDocument();
        
        // Verify some news content is displayed
        const newsItems = screen.getAllByRole('listitem');
        expect(newsItems.length).toBeGreaterThan(0);
    });
});
