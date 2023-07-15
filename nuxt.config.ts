// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    app: {
        head: {
            title: "emmett.fyi",
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Shrikhand&display=swap', },
            ],
        }
    },
    css: ['vuetify/styles'],
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@pinia/nuxt',
    ],
    vuetify: {

        moduleOptions: {
            treeshaking: true,
            autoImport: true,
            styles: { configFile: 'assets/css/settings.scss' }
        },
        vuetifyOptions: {

            ssr: true,
            theme: {
                defaultTheme: 'dark',
                themes: {
                    dark: {
                        colors: {
                            background: '#0d0d0d',
                            surface: '#fafbfb',
                            primary: '#337cb2',
                            secondary: '#34bcda',
                            tertiary: '#f7f8fa',
                            error: '#B00020',
                            info: '#2196F3',
                            success: '#4CAF50',
                            warning: '#FB8C00',
                        }
                    },
                    light: {
                        colors: {
                            background: '#fafbfb',
                            surface: '#f00',
                            primary: '#34bcda',
                            secondary: '#337cb2',
                            tertiary: '#f7f8fa',
                            error: '#B00020',
                            info: '#2196F3',
                            success: '#4CAF50',
                            warning: '#FB8C00',
                        }
                    },
                }
            },
            display: {
                mobileBreakpoint: 'xs',
                thresholds: {
                    xs: 0,
                    sm: 415,
                    md: 600,
                    lg: 960,
                    xl: 1264,
                    xxl: 1800,
                },
            },
            defaults: {
                global: {
                    ripple: false,
                  },
                VDivider: {
                    color: 'grey-lighten-5',
                },
                VCard: {
                    rounded: 0,
                    color: 'transparent',
                    variant: 'flat',
                },
                VBtn: {
                    elevation: 0,
                    variant: 'flat',
                },
                VAppBar: {
                    color: 'transparent',
                    elevation: 0,
                },
                VNavigationDrawer: {
                    color: 'transparent',
                    elevation: 0,
                }
            },
        },
    },
})
