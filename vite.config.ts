import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: [
                'resources/css/app.css',
                'resources/js/app.ts',
                'resources/js/pages/**/*.vue',
                'resources/js/components/**/*.vue',
                'resources/js/layouts/**/*.vue',
                'resources/js/composables/**/*.ts',
                'resources/views/**/*.blade.php',
                'routes/web.php',
                'routes/api.php',
                'routes/settings.php',
                'routes/auth.php',
            ],
        }),
        inertia(),
        tailwindcss(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        wayfinder({
            formVariants: true,
        }),
    ],
    server: {
        host: 'localhost',
        hmr: {
            host: 'localhost',
        },
        watch: {
            ignored: [
                '**/resources/js/actions/**',
                '**/resources/js/routes/**',
                '**/resources/js/wayfinder/**',
                '**/node_modules/**',
                '**/vendor/**',
                '**/database/database.sqlite',
                '**/.junie/**',
            ],
            usePolling: true,
            interval: 1000,
        },
    },
    optimizeDeps: {
        exclude: ['@laravel/vite-plugin-wayfinder'],
    },
});
