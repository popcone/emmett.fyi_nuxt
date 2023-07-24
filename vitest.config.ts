import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        vue(), 
        vuetify(),
    ],
    test: {
        includeSource: ["src/tests/*.ts"],
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['text'],
            reportsDirectory: './tests/unit/coverage',
        },
        reporters: ['default'],
  },
})
