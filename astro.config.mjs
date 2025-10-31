// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://whotiss.github.io",
  base: "/whotiss.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
