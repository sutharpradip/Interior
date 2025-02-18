import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/myapp/', // Ensure assets load correctly
  plugins: [react()],
});

