import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: 'src/entry.ts',
            name: 'myLib',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: /^lit-element/
        }
    }
})
