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
      // Keep the original grid layout. Plugins will now fill slots based on order fetched.
      // Note: If you load fewer than 4 plugins, the layout might look sparse.
      // Consider a more dynamic grid or adjust based on `loadedPlugins.length` if needed.
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-black text-white min-h-screen">
        {loadedPlugins.map((plugin) => {
          const PluginComponent = plugin.component;
          // Apply layout hints if available (future enhancement)
          // const colSpanClass = plugin.layout?.colSpan ? `col-span-${plugin.layout.colSpan}` : '';
          // const rowSpanClass = plugin.layout?.rowSpan ? `row-span-${plugin.layout.rowSpan}` : '';
          // Add colSpanClass and rowSpanClass to the component or a wrapper div if needed
          // For now, render directly:
          return <PluginComponent key={plugin.key} />;
        })}
        {loadedPlugins.length === 0 && !isLoading && (
            <div className="col-span-2 text-center text-gray-500">No plugins configured to display.</div>
        )}
      </div>
  );
}