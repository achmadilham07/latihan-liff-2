// vite.config.js
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      external: [
        'style.css',
        'catatan_config.js',
      ],
    }
  }
})