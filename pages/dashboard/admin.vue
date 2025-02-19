<template>
  <div class="max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tableau de bord Administrateur</h1>
      <p class="mt-2 text-gray-600">Gestion globale de la cantine</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Statistiques -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Statistiques du jour</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500">Repas servis</p>
            <p class="text-2xl font-bold text-primary-600">127</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Tickets vendus</p>
            <p class="text-2xl font-bold text-primary-600">45</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Recettes</p>
            <p class="text-2xl font-bold text-green-600">225 €</p>
          </div>
        </div>
      </div>

      <!-- Alertes -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Alertes</h2>
        <div class="space-y-4">
          <div class="flex items-center text-yellow-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Stock bas : Yaourts</span>
          </div>
          <div class="flex items-center text-red-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>3 signalements aujourd'hui</span>
          </div>
        </div>
      </div>

      <!-- Actions rapides -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <div class="space-y-3">
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Créer un menu
          </button>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Gérer les stocks
          </button>
          <button class="w-full text-left px-4 py-2 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 flex items-center">
            <svg class="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Voir les rapports
          </button>
        </div>
      </div>
    </div>

    <!-- Gestion des menus -->
    <MenuEditor />
  </div>
</template>

<script setup lang="ts">
import MenuEditor from '~/components/MenuEditor.vue';
</script>