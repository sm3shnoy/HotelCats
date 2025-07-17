import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use '@/themes/variables.scss' as *;
        @use '@/themes/fonts.scss' as *;
        @use '@/themes/mixins.scss' as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
