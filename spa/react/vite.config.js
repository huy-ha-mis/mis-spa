import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'MGNL_'],
  plugins: [react()],
  server: {
    port: 8181,
    strictPort: true,
  },
  preview: {
    port: 8181,
    strictPort: true,
  },
});
