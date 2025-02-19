<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h2 class="text-xl font-semibold mb-4">Scanner de QR Code</h2>
    <div class="relative">
      <qrcode-stream
        v-if="isScanning"
        @decode="onDecode"
        @init="onInit"
        class="rounded-lg overflow-hidden"
      />
      <div v-else class="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
        <button
          @click="startScanning"
          class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Démarrer le scan
        </button>
      </div>
    </div>
    <div v-if="error" class="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QrcodeStream } from 'vue-qrcode-reader';

const emit = defineEmits<{
  scanned: [value: string]
}>();

const isScanning = ref(false);
const error = ref('');

const startScanning = () => {
  isScanning.value = true;
  error.value = '';
};

const onDecode = (value: string) => {
  emit('scanned', value);
};

const onInit = async (promise: Promise<void>) => {
  try {
    await promise;
  } catch (e: any) {
    if (e.name === 'NotAllowedError') {
      error.value = "L'accès à la caméra a été refusé";
    } else if (e.name === 'NotFoundError') {
      error.value = 'Aucune caméra n\'a été trouvée';
    } else {
      error.value = 'Erreur lors de l\'initialisation de la caméra';
    }
  }
};
</script>