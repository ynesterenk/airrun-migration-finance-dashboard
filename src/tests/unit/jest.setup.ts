import '@testing-library/jest-dom';

// Mock matchMedia which isn't available in Jest's DOM environment
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {},
        addEventListener: function() {},
        removeEventListener: function() {},
        dispatchEvent: function() { return true; },
    };
};

// Mock ResizeObserver which isn't available in Jest's DOM environment
global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};
