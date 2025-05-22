import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  plugins: [
  require('tailwind-scrollbar-hide')
],

  extend: {
  // ...
  scrollbar: ['rounded'],
}

})