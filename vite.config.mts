// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'; // Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // Add the tsconfigPaths plugin here
    tailwindcss(),
  ],
  // Optional: Define server port if needed
  // server: {
  //   port: 3000,
  // },
  // Optional: Configure build output directory if you don't want 'dist'
  // build: {
  //   outDir: 'build',
  // }
});