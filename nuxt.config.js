export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Troov Ton Alternant",
        htmlAttrs: {
            lang: "fr"
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/TroovLogo.png" }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module"
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/buefy
        "nuxt-buefy",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/auth"
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "http://localhost:8080/"
    },
    auth: {
        localStorage: false,
        cookie: {
            prefix: "auth.",
            options: {
                path: "/",
                maxAge: 259200
            }
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: "/users/login", method: "post", propertyName: "access_token" },
                    user: { url: "/", method: "get", propertyName: "content" },
                    logout: false
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
};
