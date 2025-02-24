import react from "@vitejs/plugin-react";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, ".");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: resolve(root, "src") }, // Not important
      {
        find: "@atlaskit/pragmatic-drag-and-drop",
        replacement: resolve(
          root,
          "./node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/entry-point"
        ),
      },
    ],
  },
});
