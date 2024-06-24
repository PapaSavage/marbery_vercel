import { Style } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxtjs/google-fonts", 'radix-vue/nuxt', '@vesp/nuxt-fontawesome',],
    alias: {
        "@": "~/src",
    },
    fontawesome: {
        icons: {
            solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar', 'user-plus', 'bars', 'xmark'],
            regular: ['user'],
        }
    },
    css: ['~/src/app/styles/normalize.scss'],
    dir: {
        pages: "./src/app/routes",
        layouts: "./src/app/layouts"
    },
    googleFonts: {
        families: {
            Montserrat: '200..900',
        },
    },
    components: [
        {
            path: 'shared',
            extensions: ['.vue'],
        },
        {
            path: 'features',
            extensions: ['.vue'],
        },
        {
            path: 'widgets',
            extensions: ['.vue'],
        },
        {
            path: 'entities',
            extensions: ['.vue'],
        },
    ],
    imports: {
        dirs: [
            'shared/**/*.ts',
            'features/**/*.ts',
            'widgets/**/*.ts',
            'entities/**/*.ts',
        ],
    },
});