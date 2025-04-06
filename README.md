# Dashboard Plugin System

This project utilizes a dynamic plugin system to manage the different widgets displayed on the dashboard. This allows for better code organization, easier maintenance, and the ability to dynamically change the dashboard layout and content based on configuration.

## How it Works

The plugin system consists of three main parts:

1.  **Plugin Components:**
    *   Each distinct widget or feature (e.g., News Feed, Intraday Chart, Currency Exchange Rate) is built as a self-contained React component.
    *   These components typically reside within their own folder under `src/plugins/`.
    *   A standard structure for a plugin folder (e.g., `src/plugins/MyPlugin/`) includes:
        *   `MyPlugin.tsx`: The main React component for the plugin.
        *   `data.ts`: (Optional) Mock data or data-fetching logic specific to the plugin.
        *   `index.ts`: Exports the main component (`export { MyPlugin } from './MyPlugin';`).

2.  **Plugin Registry (`src/config/pluginRegistry.ts`):**
    *   This file acts as a central map or dictionary that knows about all *available* plugins in the codebase.
    *   It exports a `pluginRegistry` object where keys are unique string identifiers (e.g., `'news'`, `'intraday'`, `'currencyExchange'`) and values are configuration objects containing at least the plugin's `id` and the imported React `component`.
    *   Example entry:
        ```typescript
        import { CurrencyExchangeRate } from '@/plugins/CurrencyExchangeRate';
        // ... other imports

        export const pluginRegistry: Record<string, PluginConfig> = {
            // ... other plugins
            'currencyExchange': {
                id: 'currencyExchange',
                component: CurrencyExchangeRate,
                // layout hints can be added here in the future
            },
        };
        ```
    *   Plugins must be registered here to be potentially loaded by the application.

3.  **Plugin Service (`src/services/pluginService.ts`):**
    *   This service is responsible for determining *which* plugins should be *active* and displayed on the dashboard at runtime.
    *   Currently, the `getActivePlugins` function *simulates* an API call. In a real application, this would fetch the list of active plugin IDs from a backend server based on user roles, settings, or other criteria.
    *   It returns an array of `ActivePluginInfo` objects, each containing at least the `id` of an active plugin.
        ```typescript
        // Example simulation inside pluginService.ts
        const activePluginIds: string[] = [ 'news', 'currencyExchange', 'history', 'intraday' ];
        return activePluginIds.map(id => ({ id }));
        ```

4.  **Application Loading (`src/App.tsx`):**
    *   The main `App` component uses `useEffect` on mount to call `getActivePlugins` from the service.
    *   It receives the list of active plugin IDs.
    *   For each active ID, it looks up the corresponding component and configuration using `getPluginConfig` (which uses the `pluginRegistry`).
    *   It then renders the fetched plugin components dynamically, typically within a layout structure (like a CSS Grid).
    *   Crucially, `App.tsx` **does not need to be modified** when adding new plugins or changing which ones are active; it relies entirely on the service and registry.

## Adding a New Plugin

Follow these steps to add a new plugin widget to the dashboard:

1.  **Create Plugin Folder & Files:**
    *   Create a new folder for your plugin under `src/plugins/`, named appropriately (e.g., `src/plugins/MyNewWidget`).
    *   Inside this folder, create your React component file (`MyNewWidget.tsx`).
    *   (Optional) Add a `data.ts` for mock data or specific logic.
    *   Create an `index.ts` file that exports your main component:
        ```typescript
        // src/plugins/MyNewWidget/index.ts
        export { MyNewWidget } from './MyNewWidget';
        ```

2.  **Register the Plugin:**
    *   Open the plugin registry file: `src/config/pluginRegistry.ts`.
    *   Import your new component at the top:
        ```typescript
        import { MyNewWidget } from '@/plugins/MyNewWidget';
        ```
    *   Add a new entry to the `pluginRegistry` object. Choose a unique string ID for your plugin:
        ```typescript
        export const pluginRegistry: Record<string, PluginConfig> = {
            // ... existing plugins
            'myNewWidgetId': { // <-- Use a descriptive, unique ID
                id: 'myNewWidgetId',
                component: MyNewWidget,
            },
        };
        ```

3.  **Activate the Plugin (for Development/Testing):**
    *   Open the plugin service file: `src/services/pluginService.ts`.
    *   Modify the `activePluginIds` array inside the `getActivePlugins` function to include the unique ID you chose in Step 2.
        ```typescript
        const activePluginIds: string[] = [
            'news',
            'currencyExchange',
            'history',
            'intraday',
            'myNewWidgetId' // <-- Add your new plugin's ID
        ];
        ```
    *   *(Note: In a production scenario, activating plugins would likely be managed via a backend configuration or API, not by editing this mock service).*

4.  **Run the Application:**
    *   Start your development server (`npm run dev` or `yarn dev`).
    *   Your new plugin should now appear on the dashboard, rendered by the `App` component based on the updated active plugins list.

## Key Files

*   `src/App.tsx`: Loads and renders active plugins.
*   `src/config/pluginRegistry.ts`: Maps plugin IDs to components (list of all *available* plugins).
*   `src/services/pluginService.ts`: Determines which plugins are *active* (currently mocked).
*   `src/plugins/`: Directory containing all individual plugin component folders.

---