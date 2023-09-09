import { defineConfig, splitVendorChunkPlugin } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  build: {
    cssMinify: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://meatmoot-api-staging.onrender.com/api/v1',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});