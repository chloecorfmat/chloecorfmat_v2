import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    manifest: true,
    rollupOptions: {
      input: {
        main: './src/main.js',
        styles : './src/scss/styles.scss',
      },
      output: {
        entryFileNames: '[name].js', // Regrouper dans le dossier js/
        chunkFileNames: 'js/[name]-[hash].js', // Pour les modules
        assetFileNames: (assetInfo) => {
          // Regrouper les fichiers CSS
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return '[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
    target: 'es2019',
    sourcemap: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
});
