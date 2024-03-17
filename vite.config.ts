// import { resolve } from 'path';
import { resolve } from "node:path";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry:  resolve(__dirname, "src/main.ts"),
      name: 'FileUploadViewer',
      fileName: 'file-upload-viewer',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
