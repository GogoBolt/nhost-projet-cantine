<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Tableau de bord Utilisateur</h1>
      <p class="mt-2 text-gray-600">Bienvenue, {{ user?.email }}</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Projets -->
      <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Mes Projets</h2>
          <span class="text-sm text-primary">Voir tout →</span>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">Projets actifs</p>
              <p class="text-sm text-gray-500">En cours de développement</p>
            </div>
            <span class="text-2xl font-bold text-primary">3</span>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">Projets terminés</p>
              <p class="text-sm text-gray-500">Livrés avec succès</p>
            </div>
            <span class="text-2xl font-bold text-green-500">7</span>
          </div>
        </div>
      </div>

      <!-- Activités récentes -->
      <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Activités Récentes</h2>
        <div class="space-y-4">
          <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p class="font-medium text-gray-900">Nouveau projet créé</p>
              <p class="text-sm text-gray-500">Application mobile de gestion</p>
              <p class="text-xs text-gray-400 mt-1">Il y a 2 heures</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p class="font-medium text-gray-900">Tâche terminée</p>
              <p class="text-sm text-gray-500">Intégration de l'API</p>
              <p class="text-xs text-gray-400 mt-1">Il y a 1 jour</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Notifications -->
      <div class="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Notifications</h2>
          <span class="px-2 py-1 text-xs font-medium text-white bg-primary rounded-full">2 nouvelles</span>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
            <div>
              <p class="font-medium text-gray-900">Échéance proche</p>
              <p class="text-sm text-gray-500">Projet A - Dans 2 jours</p>
              <p class="text-xs text-gray-400 mt-1">Action requise</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
            <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p class="font-medium text-gray-900">Nouvelle mention</p>
              <p class="text-sm text-gray-500">Dans la tâche "Design"</p>
              <p class="text-xs text-gray-400 mt-1">Il y a 30 minutes</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques -->
      <div class="col-span-full bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Statistiques du mois</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <p class="text-sm text-gray-500">Tâches complétées</p>
            <p class="text-2xl font-bold text-primary mt-2">24</p>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <p class="text-sm text-gray-500">Heures travaillées</p>
            <p class="text-2xl font-bold text-primary mt-2">156</p>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <p class="text-sm text-gray-500">Projets livrés</p>
            <p class="text-2xl font-bold text-primary mt-2">3</p>
          </div>
          
          <div class="p-4 bg-gray-50 rounded-lg text-center">
            <p class="text-sm text-gray-500">Satisfaction client</p>
            <p class="text-2xl font-bold text-green-500 mt-2">98%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/auth';

const { user } = useAuth();
</script>