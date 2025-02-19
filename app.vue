<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <Vue3-Toastify position="top-right" /> -->
  </NuxtLayout>
</template>

<script setup>
// Ce fichier gère la structure globale, pas besoin de JavaScript spécifique pour la gestion des styles ici.
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  @apply bg-gray-50 text-gray-900;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
