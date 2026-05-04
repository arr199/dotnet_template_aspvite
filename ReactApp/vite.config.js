import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  build: {
    manifest: true,
    rolldownOptions: {
      input: {
        home: "src/pages/home.jsx",
        privacy: "src/pages/privacy.jsx",
      },
      output: {
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:7059",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});