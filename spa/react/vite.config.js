import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'MGNL_'],
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 8181,      // Set to 8181
    strictPort: true, // Keep this to fail if port 8181 is in use
  },
  preview: {
    port: 8181,
    strictPort: true,
  },
});
