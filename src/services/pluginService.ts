// Define the type for the data returned by the "API"
export interface ActivePluginInfo {
    id: string;
    // Add any other config fetched from backend, e.g., title, specific data source URL etc.
    // title?: string;
}

// Simulate an API call to get the list of active plugin IDs
export const getActivePlugins = async (): Promise<ActivePluginInfo[]> => {
    console.log("Fetching active plugins...");
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 50)); // Short delay for demo

    // In a real app, this would be:
    // const response = await fetch('/api/dashboard/plugins');
    // if (!response.ok) { throw new Error('Failed to fetch plugins'); }
    // const data = await response.json();
    // return data;

    // For this PoC, return a hardcoded list of plugin IDs
    // You can change this array to test loading different plugins
    const activePluginIds: string[] = ['news', 'crossAssetMonitor', 'history', 'intraday'];
    // const activePluginIds: string[] = ['news', 'intraday']; // Example: load only two

    console.log("Received active plugins:", activePluginIds);

    // Map IDs to the expected structure (if the API just returns IDs)
    return activePluginIds.map(id => ({ id }));
};