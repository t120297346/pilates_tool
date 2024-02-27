import {defineConfig} from 'vite'
import {VitePWA} from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/my-class-schedule/',
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate', devOptions: {
            enabled: true
        },
        includeAssets: ['favicon.ico', 'vite-192.png', 'vite.svg', 'data.json'],
        manifest: {
            name: 'My Class Schedule',
            short_name: 'MCS',
            description: 'My Awesome Class Schedule',
            theme_color: '#ffffff',
            icons: [
                {
                    src: 'vite-192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
            ]
        }
    })],
})
