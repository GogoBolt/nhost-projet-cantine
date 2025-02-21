// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  plugins: [
    '~/plugins/toastify.ts',
    '~/plugins/nhost.ts'
  ],

  runtimeConfig: {
    public: {
      nhostSubdomain: process.env.NHOST_SUBDOMAIN || 'local',
      nhostRegion: process.env.NHOST_REGION || 'local',
      nhostBackendUrl: process.env.NHOST_BACKEND_URL || 'http://localhost:1337/v1',
      nhostAdminSecret: process.env.NHOST_ADMIN_SECRET,
      appTitle: 'Gestion des cantines scolaires',
      appDescription: 'Application de gestion des cantines scolaires'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },

  build: {
    transpile: ['@headlessui/vue']
  },

  app: {
    head: {
      title: 'Gestion des cantines scolaires',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Application de gestion des cantines scolaires' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-02-21'
});