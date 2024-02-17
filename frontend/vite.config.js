import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    host: true,
    origin: 'http://0.0.0.0:5173',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});