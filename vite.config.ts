// @ts-ignore
import {defineConfig} from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-commerce-project/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src') ,
    },
  },
})
