import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set base to your GitHub repo name for GitHub Pages. Update if different.
  base: '/valentine-app/',
  plugins: [react()],
})
