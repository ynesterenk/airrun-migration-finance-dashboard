import React from 'react';
import { NewsFeed } from '@/plugins/NewsFeed';
import { CrossAssetMonitor } from '@/plugins/CrossAssetMonitor';
import { HistoricalChart } from '@/plugins/HistoricalChart';
import { IntradayChart } from '@/plugins/IntradayChart';
import { CurrencyExchangeRate } from '@/plugins/CurrencyExchangeRate';
import CrossAssetMonitor from '../plugins/CrossAssetMonitor/CrossAssetMonitor';

export type PluginComponentType = React.ComponentType<any>; 

export interface PluginConfig {
    id: string;
    component: PluginComponentType;
}

export const pluginRegistry: Record<string, PluginConfig> = {
    'news': {
        id: 'news',
        component: NewsFeed,
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
    },
    'crossAssetMonitor': {
        id: 'crossAssetMonitor',
        component: CrossAssetMonitor,
    },
};

export const getPluginComponent = (id: string): PluginComponentType | undefined => {
    return pluginRegistry[id]?.component;
};

export const getPluginConfig = (id: string): PluginConfig | undefined => {
    return pluginRegistry[id];
}

export default pluginRegistry;