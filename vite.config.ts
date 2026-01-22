import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), tailwindcss()],
});
