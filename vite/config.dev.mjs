import { defineConfig } from 'vite';

export default defineConfig({
    base: '/fish/',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    phaser: ['phaser']
                }
            }
        },
    },
    server: {
        port: 8080
    }
});
