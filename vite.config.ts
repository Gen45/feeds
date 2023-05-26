import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./src/assets"),
      "components": path.resolve(__dirname, "./src/components"),
      "views": path.resolve(__dirname, "./src/views"),
      "models": path.resolve(__dirname, "./src/models"),
      "utils": path.resolve(__dirname, "./src/utils"),
      "services": path.resolve(__dirname, "./src/services"),
    },
  },
})
