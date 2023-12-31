
export default defineNuxtConfig({
    app: {
        head: {
            title: "emmett.fyi",
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap', title: 'Google Font: Open Sans' },
            ],
        }
    },
    css: ['vuetify/styles', '~/assets/css/main.scss', '~/assets/css/default.scss'],
    modules: [
        '@invictus.codes/nuxt-vuetify',
        '@pinia/nuxt',
    ],
    components: [
        // ~/calendar-module/components/event/Update.vue => <EventUpdate />
        '~/components', { path: '~/components/utils/', pathPrefix: false },
    ],
    runtimeConfig: {
        quizApiSecret: '',
        apiBaseDev: '',
        apiBaseProd: '',
        public: {
            apiBase: '',
            cdnImgBase: ''
        }
    },
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
                            surface: '#eff3f5',
                            primary: '#337cb2',
                            secondary: '#0099cc',
                            tertiary: '#7ec9b6',
                            error: '#B00020',
                            info: '#2d6c5c',
                            success: '#4CAF50',
                            warning: '#FB8C00',
                        }
                    },
                    light: {
                        colors: {
                            background: '#eff3f5',
                            surface: '#0d0d0d',
                            primary: '#28608a',
                            secondary: '#8f005d',
                            tertiary: '#7ec9b6',
                            error: '#B00020',
                            info: '#3c907b',
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
                VAppBar: {
                    color: 'transparent',
                    elevation: 0,
                },
                VBtn: {
                    elevation: 0,
                    variant: 'flat',
                },
                VCard: {
                    rounded: 0,
                    color: 'transparent',
                    variant: 'flat',
                },
                VDivider: {
                    color: 'secondary',
                },
                VNavigationDrawer: {
                    color: 'transparent',
                    elevation: 0,
                }
            },
        },
    },
    
})
