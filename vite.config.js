import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',          // Setzt den Projektstamm (wo index.html liegt)
    build: {
        outDir: 'dist', // Gibt an, wohin die Produktionsdateien exportiert werden
    },
    server: {
        open: true,     // Öffnet die Webseite automatisch im Browser
    }
});