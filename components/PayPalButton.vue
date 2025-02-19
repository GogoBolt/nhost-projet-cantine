<template>
  <div ref="paypalButtonContainer" class="w-full"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNuxtApp }from 'nuxt/app';

const { $paypal } = useNuxtApp();
const paypalButtonContainer = ref<HTMLElement | null>(null);

const props = defineProps<{
  amount: number;
  currency?: string;
}>();

const emit = defineEmits<{
  success: [details: any];
  error: [error: Error];
}>();

onMounted(async () => {
  interface PayPal {
  Buttons: any;
  // autres propriétés et méthodes
}

const { $paypal } = useNuxtApp() as unknown as { $paypal: PayPal };
  if (!paypalButtonContainer.value) return;

  try {
    await $paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'pay'
      },
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: props.amount.toString(),
              currency_code: props.currency || 'EUR'
            }
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const details = await actions.order.capture();
        emit('success', details);
      },
      onError: (err: Error) => {
        emit('error', err);
      }
    }).render(paypalButtonContainer.value);
  } catch (error) {
    console.error('Failed to render PayPal Buttons:', error);
  }
});
</script>