import { loadScript } from "@paypal/paypal-js";
import { defineNuxtPlugin }from 'nuxt/app';
import type { PayPalScriptOptions } from '@paypal/paypal-js';

export default defineNuxtPlugin(async (nuxtApp) => {
  const options: PayPalScriptOptions = {
    clientId: process.env.PAYPAL_CLIENT_ID || "test",
    currency: "EUR",
  };

  const paypal = await loadScript(options);

  return {
    provide: {
      paypal,
    },
  };
});