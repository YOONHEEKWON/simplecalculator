import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
//vite.config.ts
import tailwindcss from "tailwindcss";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
