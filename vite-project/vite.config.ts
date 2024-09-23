// vite.config.js
// https://vitejs.dev/guide/build.html

import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig ({ 
  // config options
  plugins: [UnoCSS()],
})