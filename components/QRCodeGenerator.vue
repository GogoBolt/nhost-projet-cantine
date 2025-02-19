<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4">QR Code de l'élève</h2>
    <div class="flex flex-col items-center">
      <qrcode-vue
        :value="qrValue"
        :size="200"
        level="H"
        class="mb-4"
      />
      <p class="text-sm text-gray-600">ID: {{ qrValue }}</p>
      <button
        @click="downloadQR"
        class="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Télécharger le QR Code
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import QrcodeVue from 'qrcode.vue';

const props = defineProps<{
  studentId: string;
}>();

const qrValue = computed(() => `student:${props.studentId}`);

const downloadQR = () => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.download = `qr-code-${props.studentId}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
};
</script>