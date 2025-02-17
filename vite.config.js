import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   base: './', // Ensures relative paths for assets
//   build: {
//     outDir: 'dist',
//   },
// });
export default defineConfig({
  base: '/', // Set this correctly
  plugins: [react()],
});
