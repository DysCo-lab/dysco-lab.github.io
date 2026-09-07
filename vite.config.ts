import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Use relative paths so the site works whether it's hosted at the root of a
  // user/organization Pages site (e.g. dysco-lab.github.io) or at a project-page
  // subpath (e.g. username.github.io/dysco-lab/). All JS/CSS is inlined by
  // vite-plugin-singlefile; this ensures image / static asset URLs resolve.
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
