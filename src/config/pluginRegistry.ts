import React from 'react';
import { NewsFeed } from '@/plugins/NewsFeed';
import { CrossAssetMonitor } from '@/plugins/CrossAssetMonitor';
import { HistoricalChart } from '@/plugins/HistoricalChart';
import { IntradayChart } from '@/plugins/IntradayChart';
import { CurrencyExchangeRate } from '@/plugins/CurrencyExchangeRate';
import { CrossAssets } from '@/plugins/CrossAssets'; // Import the new CrossAssets plugin

// Define a type for better safety (optional but recommended)
export type PluginComponentType = React.ComponentType<any>; // Use specific props type if needed

export interface PluginConfig {
    id: string;
    component: PluginComponentType;
    // Add layout hints if needed in the future
    // layout?: { colSpan?: number; rowSpan?: number };
}

// The registry maps plugin IDs to their configuration
export const pluginRegistry: Record<string, PluginConfig> = {
    'news': {
        id: 'news',
        component: NewsFeed,
        // Example layout hint:
        // layout: { colSpan: 2 }
    },
    'crossAsset': {
        id: 'crossAsset',
        component: CrossAssetMonitor,
    },
    'currencyExchange': { 
        id: 'currencyExchange',
        component: CurrencyExchangeRate,
    },
    'history': {
        id: 'history',
        component: HistoricalChart,
    },
    'intraday': {
        id: 'intraday',
        component: IntradayChart,
        // Example layout hint:
        // layout: { colSpan: 2 }
    },
    'crossAssets': { // Register the new CrossAssets plugin
        id: 'crossAssets',
        component: CrossAssets,
    },
    // Add more plugins here as needed
};

// Helper function to get a component by ID
export const getPluginComponent = (id: string): PluginComponentType | undefined => {
    return pluginRegistry[id]?.component;
};

// Helper function to get full plugin config by ID
export const getPluginConfig = (id: string): PluginConfig | undefined => {
    return pluginRegistry[id];
}