<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tableau de bord</h1>
      <p class="mt-2 text-gray-600">Bienvenue {{ user?.email }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistiques -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Statistiques</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500">Projets actifs</p>
            <p class="text-2xl font-bold text-primary">3</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Tâches en cours</p>
            <p class="text-2xl font-bold text-primary">12</p>
          </div>
        </div>
      </div>

      <!-- Activités récentes -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Activités récentes</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <p class="text-sm text-gray-600">Nouveau projet créé</p>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <p class="text-sm text-gray-600">Tâche terminée</p>
          </div>
        </div>
      </div>

      <!-- Notifications -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            <p class="text-sm text-gray-600">Échéance proche : Projet A</p>
          </div>
          <div class="flex items-center">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
            <p class="text-sm text-gray-600">Nouvelle mention dans une tâche</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Exemple dans un fichier Vue/TypeScript
import { ref } from 'vue';             // Pour utiliser 'ref'
import { useAuth } from '~/composables/auth';   // Pour utiliser 'useAuth' 

const { user } = useAuth();
</script>