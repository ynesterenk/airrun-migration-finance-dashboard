// src/reportWebVitals.ts
import { ReportHandler } from 'web-vitals'; // <--- Import the type

// Add the ': ReportHandler' type annotation to the parameter
// Making it optional with '?' is also good practice here as it might not always be called with a handler
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;