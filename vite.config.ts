import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
