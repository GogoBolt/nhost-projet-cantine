<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Tableau de bord Visiteur</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistiques publiques -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Statistiques Publiques</h2>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500">Utilisateurs actifs</p>
            <p class="text-2xl font-bold text-primary">1,234</p>
          </div>
          <div>
            <p class="text-sm text-gray-500">Projets réalisés</p>
            <p class="text-2xl font-bold text-primary">89</p>
          </div>
        </div>
      </div>

      <!-- Fonctionnalités -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Fonctionnalités</h2>
        <ul class="space-y-2">
          <li class="flex items-center text-gray-600">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Accès aux projets publics
          </li>
          <li class="flex items-center text-gray-600">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Consultation des statistiques
          </li>
        </ul>
      </div>

      <!-- Appel à l'action -->
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Rejoignez-nous</h2>
        <p class="text-gray-600 mb-4">
          Créez un compte pour accéder à toutes les fonctionnalités
        </p>
        <NuxtLink
          to="/register"
          class="block text-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
        >
          S'inscrire maintenant
        </NuxtLink>
      </div>
    </div>
  </div>
</template>