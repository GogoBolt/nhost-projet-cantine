<template>
  <Transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 overflow-hidden">
        <!-- Bouton fermer -->
        <button 
          @click="close" 
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Contenu -->
        <div class="p-8">
          <!-- En-tête -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Bienvenue sur GogoSoft</h2>
            <p class="text-lg text-gray-600">
              Votre partenaire de confiance pour le développement d'applications web innovantes
            </p>
          </div>

          <!-- Profil développeur -->
          <div class="flex items-center justify-center mb-8">
            <div class="text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                alt="Développeur"
                class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 class="text-xl font-semibold text-gray-900">John Doe</h3>
              <p class="text-gray-600">Développeur Full Stack Senior</p>
            </div>
          </div>

          <!-- Portfolio -->
          <div class="mb-8">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4 text-center">Nos Réalisations</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="relative group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
                  alt="Projet 1"
                  class="w-full h-48 object-cover rounded-lg"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p class="text-white font-semibold">Plateforme E-commerce</p>
                </div>
              </div>
              <div class="relative group">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3"
                  alt="Projet 2"
                  class="w-full h-48 object-cover rounded-lg"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p class="text-white font-semibold">Application de Gestion</p>
                </div>
              </div>
              <div class="relative group">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3"
                  alt="Projet 3"
                  class="w-full h-48 object-cover rounded-lg"
                />
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p class="text-white font-semibold">Réseau Social</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Timer -->
          <div class="text-center text-gray-500">
            Fermeture automatique dans {{ timer }} secondes
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(true);
const timer = ref(15);
let interval: NodeJS.Timeout;

const close = () => {
  isVisible.value = false;
  clearInterval(interval);
};

onMounted(() => {
  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--;
    } else {
      close();
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>