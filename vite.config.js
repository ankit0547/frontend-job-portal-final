import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // or '0.0.0.0'
    port: 4173, // default, change if needed
    open: false, // auto-open browser
  },
  build: {
    outDir: "dist", // where to output production build
    sourcemap: false, // set to true for debugging production issues
  },
});
