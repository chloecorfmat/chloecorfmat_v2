import { defineConfig, createLogger } from 'vite';

// Ces URL absolues (/themes/custom/cco_theme/fonts|assets/...) pointent vers
// des fichiers déjà présents à la racine du thème, servis tels quels par
// Drupal. Vite ne peut pas les résoudre depuis sa racine de build : c'est
// attendu. Ce warning précis est émis via logger.warnOnce (et non warn ni
// le hook Rollup onwarn), on l'intercepte donc à cet endroit.
const logger = createLogger();
const originalWarnOnce = logger.warnOnce;
logger.warnOnce = (msg, options) => {
  if (msg.includes("didn't resolve at build time")) return;
  originalWarnOnce(msg, options);
};

export default defineConfig(({ mode }) => ({
  customLogger: logger,
  build: {
    outDir: 'dist',
    manifest: true,
    minify: mode === 'production',
    rollupOptions: {
      input: {
        main: './src/main.js',
        accordion: './src/js/accordion.js',
        carousel: './src/js/carousel.js',
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
    sourcemap: mode !== 'production',
  },
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
}));
