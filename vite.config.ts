import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    // UPDATED: Set to '/' so assets load correctly on the custom root domain (jillianrodak.com)
    base: '/', 
    server: {
      port: 5000,
      host: '0.0.0.0',
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
