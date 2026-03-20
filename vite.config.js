import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://<user>.github.io/MyResume/
export default defineConfig({
  plugins: [react()],
  base: '/MyResume/',
});
