import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../backend/go/assets",
  },
  server: {
    proxy: {
      "/socket.io": {
        target: "http://localhost:3000",
        ws: true,
      },
    },
  },
});
