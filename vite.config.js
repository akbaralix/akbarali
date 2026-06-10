import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/akbarali/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
