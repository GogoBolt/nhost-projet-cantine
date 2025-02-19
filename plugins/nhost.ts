import { NhostClient } from '@nhost/nhost-js';
import { defineNuxtPlugin, useRuntimeConfig }from 'nuxt/app';
import type { NhostAuthMethods } from '~/types/nhost';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  const nhost = new NhostClient({
    subdomain: String(config.nhostSubdomain),
    region: String(config.nhostRegion),
    graphqlUrl: String(config.nhostBackendUrl),
    authUrl: String(config.nhostAuthUrl)
  });

  nuxtApp.vueApp.use({
    install(app) {
      app.provide('nhost', nhost);
    }
  });

  const additionalUrls = {
    storageUrl: config.nhostStorageUrl,
    functionsUrl: config.nhostFunctionsUrl,
    dashboardUrl: config.nhostDashboardUrl,
    mailhogUrl: config.nhostMailhogUrl,
    postgresUrl: config.nhostPostgresUrl
  };

  const authMethods: NhostAuthMethods = {
    register: async (email: string, password: string, role?: string) => {
      try {
        const { error, session } = await nhost.auth.signUp({
          email,
          password,
          options: {
            defaultRole: role || 'guest',
            allowedRoles: [role || 'guest']
          }
        });

        if (error) {
          console.error('Erreur lors de l\'inscription :', error);
          return false;
        }
        return true;
      } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        return false;
      }
    },

    login: async (email: string, password: string) => {
      try {
        const { error, session } = await nhost.auth.signIn({
          email,
          password
        });

        if (error) {
          console.error('Erreur lors de la connexion :', error);
          return false;
        }
        return true;
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
        return false;
      }
    },

    logout: async () => {
      try {
        const { error } = await nhost.auth.signOut();

        if (error) {
          console.error('Erreur lors de la déconnexion :', error);
          return false;
        }
        return true;
      } catch (error) {
        console.error('Erreur lors de la déconnexion :', error);
        return false;
      }
    },

    loginWithProvider: async (provider: string) => {
      try {
        const { error, session } = await nhost.auth.signIn({
          provider: provider as any
        });

        if (error) {
          console.error(`Erreur lors de la connexion via ${provider}:`, error);
          return false;
        }
        return true;
      } catch (error) {
        console.error(`Erreur lors de la connexion via ${provider}:`, error);
        return false;
      }
    },

    signIn: async (credentials: { email: string; password: string }) => {
      const { error, session } = await nhost.auth.signIn(credentials);
      return { session, error };
    }
  };

  return {
    provide: {
      nhost,
      nhostUrls: additionalUrls,
      auth: authMethods
    }
  };
});