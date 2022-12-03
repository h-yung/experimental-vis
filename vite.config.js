import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // below: uncomment for build
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
});
