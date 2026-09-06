import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/Crystal-Math-Tailwind-Website/',
    plugins: [
        tailwindcss(),
    ],
})