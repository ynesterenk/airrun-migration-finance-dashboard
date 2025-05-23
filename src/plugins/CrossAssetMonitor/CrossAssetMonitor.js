import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { mockCrossAssetData } from "./data";
// Helper function to determine text color based on value
const getValueColor = (value) => {
    return value >= 0 ? "text-green-400" : "text-red-400";
};
// Helper function to format the price change string
const formatPriceChange = (change) => {
    return change;
};
// Helper function to format numbers with appropriate precision
const formatPrice = (price) => {
    return price.toFixed(2);
};
export function CrossAssetMonitor() {
    return (_jsx(Card, { className: "bg-gray-900 text-white", children: _jsxs(CardContent, { className: "p-4", children: [_jsx("h2", { className: "text-xl text-gray-300 mb-4 text-center", children: "Cross Asset Monitor" }), _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { className: "border-gray-700", children: [_jsx(TableHead, { className: "text-gray-400 text-left", children: "RIC" }), _jsx(TableHead, { className: "text-gray-400 text-left", children: "Name" }), _jsx(TableHead, { className: "text-gray-400 text-right", children: "Last" }), _jsx(TableHead, { className: "text-gray-400 text-right", children: "Price Change" })] }) }), _jsx(TableBody, { children: mockCrossAssetData.map((item) => (_jsxs(TableRow, { className: "border-gray-800", children: [_jsx(TableCell, { className: "text-blue-400 font-mono", children: item.ric }), _jsx(TableCell, { className: "text-white", children: item.name }), _jsx(TableCell, { className: `text-right ${getValueColor(item.percentChange)}`, children: formatPrice(item.last) }), _jsx(TableCell, { className: `text-right ${getValueColor(item.percentChange)}`, children: formatPriceChange(item.change) })] }, item.ric))) })] })] }) }));
}
