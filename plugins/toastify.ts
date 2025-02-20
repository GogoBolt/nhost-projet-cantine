// plugins/toastify.ts
import { defineNuxtPlugin } from 'nuxt/app';
import { defineComponent } from 'vue';
import { toast, toastContainers } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('tostContainers', toastContainers);
  return {
    provide: {
      toast,
    },
  };
});
