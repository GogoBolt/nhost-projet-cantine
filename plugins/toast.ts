import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { defineNuxtPlugin }from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.use(toast, {
    autoClose: 3000,
    position: 'top-right',
  });

  return {
    provide: {
      toast,
    },
  };
});