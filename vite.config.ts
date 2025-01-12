import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));
  console.log(mode)
  if (command === "build") {
   
    return {
      base: "./",
      build: {
        outDir: "dist",
        rollupOptions: {
          input: {
            main: resolve(__dirname, "index.html"),
            nested: resolve(__dirname, "nested/index.html"),
            nestedRedux: resolve(__dirname, "nestedRedux/index.html"),
          },
        },
      },
      plugins: [react()],
    };
  } else {
   
    return {
      plugins: [react()],
      server: {
        port: 8080,
      },
    };
  }
});