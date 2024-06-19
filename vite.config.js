import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@views', replacement: '/src/views' },
      { find: '@resource', replacement: '/src/static/resource' },
    ],
  },
});
