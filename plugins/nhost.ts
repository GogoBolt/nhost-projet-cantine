import { NhostClient } from '@nhost/nhost-js';
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;

  const nhost = new NhostClient({
    subdomain: config.nhostSubdomain as string,
    region: config.nhostRegion as string,
    adminSecret: config.nhostAdminSecret as string
  });

  return {
    provide: {
      nhost
    }
  };
});