require('dotenv').config({
  path: process.env.NODE_ENV == 'development' ? '.env.development' : '.env'
})
import colors from 'vuetify/es5/util/colors'
import 'vee-validate'
import 'vrwebdesign-nuxt/modules/nuxt-axios'
import 'vrwebdesign-nuxt/modules/nuxt-dialog'
import 'vrwebdesign-nuxt/modules/nuxt-toast'
import 'vrwebdesign-nuxt/modules/nuxt-loader'
import 'vrwebdesign-nuxt/modules/nuxt-scroll-to'
import 'vrwebdesign-nuxt/modules/nuxt-enums'
import 'vrwebdesign-nuxt/modules/nuxt-authorization'
import 'vuex'
import './services/types/index'
export default {
  mode: 'spa',

  server: {
    port: process.env.PORT // default: 3000
    //host: '0.0.0.0' // default: localhost
  },
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api',
    port: process.env.PORT
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL || 'http://localhost:3336',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },
  styleResources: {
    scss: ['./assets/style/_variables.scss', './assets/style/_mixins.scss']
  },
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: {
          memoryLimit: 8192,
          workers: 4
        },
        ignoreNotFoundWarnings: false
      }
    ],
    '@nuxtjs/vuetify'
  ],

  head: {
    titleTemplate:
      'تعمیر تلویزیون | تعمیر سینمای خانگی | تعمیر تلویزیون در تهران',
    title: 'تعمیر تلویزیون | تعمیر سینمای خانگی | تعمیر تلویزیون در تهران',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'تعمیر تلویزیون در شهر تهران با بهترین قیمت در محل ما تضمین مناسب ترین قیمت را به مشتریان عزیز میدهیم با بهترین متخصصان در زمینه تعمیرات لوازم خانگی'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'vrwebdesign-nuxt/assets/style/main.scss',
    '~assets/style/main.scss',
    'animate.css/animate.css',
    'video.js/dist/video-js.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/iconLoader.js',
    '@/plugins/globalComponent.js',
    { src: '@/plugins/videoPlayer.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/pwa',
    // '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
    [
      '@nuxtjs/dotenv',
      {
        filename:
          process.env.NODE_ENV == 'development' ? '.env.development' : '.env'
      }
    ],
    'vrwebdesign-nuxt/modules/nuxt-client-init',
    'vrwebdesign-nuxt/modules/nuxt-axios',
    'vrwebdesign-nuxt/modules/nuxt-validate',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-date-picker',
    'vrwebdesign-nuxt/modules/nuxt-file-upload',
    'vrwebdesign-nuxt/modules/nuxt-scroll-to',
    'vrwebdesign-nuxt/modules/nuxt-currency',
    'vrwebdesign-nuxt/modules/nuxt-enums',
    'vrwebdesign-nuxt/modules/nuxt-badge',
    'vrwebdesign-nuxt/modules/nuxt-navbar',
    'vrwebdesign-nuxt/modules/nuxt-chart',
    'vrwebdesign-nuxt/modules/nuxt-toast',
    'vrwebdesign-nuxt/modules/nuxt-dialog',
    'vrwebdesign-nuxt/modules/nuxt-global',
    'vrwebdesign-nuxt/modules/nuxt-data-grid',
    'vrwebdesign-nuxt/modules/nuxt-form-generator'
  ],
  watch: ['services', 'enums'],
  vuetify: {
    customVariables: ['~/assets/style/vuetify_variables.scss'],
    rtl: true,
    treeShake: true,
    defaultAssets: {
      icons: false,
      font: false
    },
    theme: {
      themes: {
        light: {
          primary: colors.cyan.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
        }
      }
    },
    icons: {
      values: {
        user: {
          component: 'iconLoader',
          props: {
            name: 'User'
          }
        },
        chevron_down: {
          component: 'iconLoader',
          props: {
            name: 'ChevronDown'
          }
        },
        location: {
          component: 'iconLoader',
          props: {
            name: 'Location'
          }
        },
        calendar: {
          component: 'iconLoader',
          props: {
            name: 'Calendar'
          }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    typescript: {
      typeCheck: true
    },
    watch: ['services', 'enums'],
    transpile: ['lodash-es'],
    standalone: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            loader: 'vue-svg-loader'
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      })
    }
  }
}
