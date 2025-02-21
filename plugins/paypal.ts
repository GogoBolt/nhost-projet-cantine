// This file will be removed as we'll use Nhost for payments
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp) => {
  // Placeholder for future Nhost payment integration
  return {
    provide: {
      payment: {
        // Payment methods will be implemented using Nhost
      }
    }
  };
});