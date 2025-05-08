import React, { useState, useEffect } from 'react';
import { getActivePlugins, ActivePluginInfo } from '@/services/pluginService';
import { getPluginConfig, PluginConfig } from '@/config/pluginRegistry';

// Define a type for the loaded plugins state
type LoadedPlugin = PluginConfig & { key: string };

export default function App() {
  const [loadedPlugins, setLoadedPlugins] = useState<LoadedPlugin[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlugins = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const activePluginsInfo: ActivePluginInfo[] = await getActivePlugins();

        const pluginsToLoad: LoadedPlugin[] = activePluginsInfo
            .map((pluginInfo) => {
              const config = getPluginConfig(pluginInfo.id);
              if (!config) {
                console.warn(`Plugin configuration not found for ID: ${pluginInfo.id}`);
                return null; // Skip plugins not found in the registry
              }
              // Return the full config, adding a unique key for React rendering
              return { ...config, key: config.id };
            })
            .filter((plugin): plugin is LoadedPlugin => plugin !== null); // Filter out nulls and type guard

        setLoadedPlugins(pluginsToLoad);

      } catch (err) {
        console.error("Failed to load plugins:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    loadPlugins();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen bg-black text-white">Loading Plugins...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen bg-black text-red-500">Error loading plugins: {error}</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loadedPlugins.map((plugin, index) => {
          const PluginComponent = plugin.component;
          return (
            <div key={plugin.key} className={`bg-gray-800 p-4 rounded-lg ${index >= 4 ? 'md:col-span-2' : ''}`}>
              <PluginComponent />
            </div>
          );
        })}
        {loadedPlugins.length === 0 && !isLoading && (
          <div className="col-span-1 md:col-span-2 text-center text-gray-500">No plugins configured to display.</div>
        )}
      </div>
    </div>
  );
}