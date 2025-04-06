// For flags, we'll use simple string placeholders for now.
// In a real app, you might use ISO codes (EU, GB, AU, NZ, JP) and map them to SVGs or image URLs.
export interface CurrencyRateItem {
    flag: string; // Placeholder string, e.g., "[EU]" or an actual character/emoji if suitable
    currency: string;
    price: number;
    dayChange: number;
    percentChange: number; // Store as number for easier coloring logic
}

export const mockCurrencyData: CurrencyRateItem[] = [
    { flag: "🇪🇺", currency: "EURUSD", price: 1.09523, dayChange: 0.00995, percentChange: -0.90 },
    { flag: "🇬🇧", currency: "GBPUSD", price: 1.28855, dayChange: 0.02143, percentChange: -1.64 },
    { flag: "🇦🇺", currency: "AUDUSD", price: 0.60401, dayChange: 0.02887, percentChange: -4.56 },
    { flag: "🇳🇿", currency: "NZDUSD", price: 0.55977, dayChange: 0.02050, percentChange: -3.53 },
    { flag: "🇯🇵", currency: "USDJPY", price: 146.961, dayChange: 0.906, percentChange: 0.62 },
];