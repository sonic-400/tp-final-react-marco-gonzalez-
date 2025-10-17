import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tp-final-react-marco-gonzalez/', // 👈 nombre exacto del repositorio
})
