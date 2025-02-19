// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      nhostSubdomain: process.env.NUXT_PUBLIC_NHOST_SUBDOMAIN || 'local',
      nhostRegion: process.env.NUXT_PUBLIC_NHOST_REGION || 'local',
      nhostBackendUrl: process.env.NUXT_PUBLIC_NHOST_BACKEND_URL || 'http://localhost:1337/v1/graphql',
      nhostAuthUrl: process.env.NUXT_PUBLIC_NHOST_AUTH_URL || 'http://localhost:1337/v1/auth',
      nhostStorageUrl: process.env.NUXT_PUBLIC_NHOST_STORAGE_URL || 'http://localhost:1337/v1/storage',
      nhostFunctionsUrl: process.env.NUXT_PUBLIC_NHOST_FUNCTIONS_URL || 'http://localhost:1337/v1/functions',
      nhostDashboardUrl: process.env.NUXT_PUBLIC_NHOST_DASHBOARD_URL || 'http://localhost:1337',
      nhostMailhogUrl: process.env.NUXT_PUBLIC_NHOST_MAILHOG_URL || 'http://localhost:8025',
      nhostPostgresUrl: process.env.NUXT_PUBLIC_NHOST_POSTGRES_URL || 'postgres://postgres:postgres@localhost:5432/local'
    }
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

  typescript: {
    strict: true,
    typeCheck: true
  },

  build: {
    transpile: ['@headlessui/vue']
  },

  nitro: {
    preset: 'node'
  },

  compatibilityDate: '2025-02-18'
})