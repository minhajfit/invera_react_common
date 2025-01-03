import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'invera_react_common': '../invera_react_common/dist', // Point to your built package output
    },
  },
  build: {
    lib: {
      entry: './src/index.tsx', // Main entry point
      name: 'InveraReactCommon',
      fileName: (format) => `invera-react-common.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Peer dependencies
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
