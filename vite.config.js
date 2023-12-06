import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5999,
  },
  plugins: [
    react(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "manifest.json"],
      manifest: {
        name: "X-Beat",
        short_name: "X-Beat",
        description: "Find the best deals",
        display: "standalone",
        background_color: "#141414",
        theme_color: "#000000",
        icons: [
          {
            src: "./logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  scripts: {
    build: "vite build",
    preview: "vite preview",
  },
  base: "/X-Beat/",
});
