<template>
  <header class="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 shadow-lg sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2 group">
            <img src="/logo.png" alt="Logo" class="h-10 w-10 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110" />
            <div class="text-white">
              <span class="text-xl font-bold block">GogoSoft</span>
              <span class="text-sm text-gray-300 block">Cantine Scolaire</span>
            </div>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-6">
          <!-- Icônes des réseaux sociaux -->
          <div class="flex items-center space-x-4">
            <!-- YouTube -->
            <a
              href="https://youtu.be/jeKeZnDQe1Y"
              target="_blank"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Voir la démo sur YouTube"
            >

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="#FF0000" d="M23.498 6.186a3.009 3.009 0 00-2.121-2.125C19.239 3.5 12 3.5 12 3.5s-7.239 0-9.377.561a3.009 3.009 0 00-2.121 2.125C0 8.325 0 12 0 12s0 3.675.502 5.814a3.009 3.009 0 002.121 2.125C4.761 20.5 12 20.5 12 20.5s7.239 0 9.377-.561a3.009 3.009 0 002.121-2.125C24 15.675 24 12 24 12s0-3.675-.502-5.814zM9.546 15.568V8.432L15.818 12l-6.272 3.568z"/>
</svg>

            </a>

            <!-- Facebook -->
            <a
              href="https://www.facebook.com/thierry.gogo"
              target="_blank"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Suivez-nous sur Facebook"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="#1877F2" d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.324 0 2.463.099 2.794.143v3.24l-1.916.001c-1.503 0-1.794.714-1.794 1.763v2.308h3.587l-.467 3.626h-3.12V24h6.116c.73 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
</svg>



            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.me/2250758966156"
              target="_blank"
              class="text-gray-300 hover:text-white transition-colors"
              aria-label="Contactez-nous sur WhatsApp"
            >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#25D366" d="M12 .5C5.648.5.5 5.648.5 12c0 2.069.529 4.06 1.533 5.834L.5 23.5l5.83-1.533A11.494 11.494 0 0012 23.5c6.352 0 11.5-5.148 11.5-11.5S18.352.5 12 .5zm0 21.333c-1.867 0-3.708-.465-5.327-1.352l-.38-.208-3.461.91.927-3.375-.24-.38A9.473 9.473 0 012.667 12c0-5.165 4.168-9.333 9.333-9.333S21.333 6.835 21.333 12 17.165 21.333 12 21.333zm4.252-6.643c-.719-.36-1.663-.754-1.903-.878-.24-.125-.412-.187-.586.187-.173.374-.673.877-.923 1.052-.25.173-.432.187-.796-.062-.364-.25-1.538-.57-2.931-1.813-1.083-.968-1.813-2.166-2.016-2.531-.203-.364-.021-.561.155-.747.157-.157.364-.412.548-.619.187-.203.25-.343.375-.561.125-.217.062-.405-.031-.561-.093-.156-.796-1.93-1.091-2.642-.287-.689-.579-.596-.796-.596-.217 0-.434-.031-.673-.031s-.592.062-.903.28c-.31.218-1.185 1.159-1.185 2.832s1.213 3.288 1.38 3.52c.168.218 2.407 3.689 5.843 4.949 1.658.576 2.306.625 3.136.539.5-.051 1.538-.627 1.754-1.237.217-.609.217-1.131.156-1.237-.062-.106-.219-.156-.469-.28z"/>
          </svg>


            </a>
          </div>

          <!-- Boutons de connexion et d'inscription -->
          <template v-if="isAuthenticated">
            <NuxtLink
              to="/dashboard"
              class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600/20"
            >
              Tableau de bord
            </NuxtLink>
            <button
              @click="handleLogout"
              class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600/20"
            >
              Déconnexion
            </button>
          </template>
          <template v-else>
            <NuxtLink
              to="/login"
              class="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-600/20"
            >
              Connexion
            </NuxtLink>
            <NuxtLink
              to="/register"
              class="bg-white text-primary-600 hover:bg-gray-100 transition-all duration-300 px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Inscription
            </NuxtLink>
          </template>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-primary-600/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div
          v-show="mobileMenuOpen"
          class="md:hidden bg-primary-800 rounded-lg mt-2 shadow-lg"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <template v-if="isAuthenticated">
              <NuxtLink
                to="/dashboard"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-600/20"
                @click="mobileMenuOpen = false"
              >
                Tableau de bord
              </NuxtLink>
              <button
                @click="handleLogout"
                class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-600/20"
              >
                Déconnexion
              </button>
            </template>
            <template v-else>
              <NuxtLink
                to="/login"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-600/20"
                @click="mobileMenuOpen = false"
              >
                Connexion
              </NuxtLink>
              <NuxtLink
                to="/register"
                class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-primary-600/20"
                @click="mobileMenuOpen = false"
              >
                Inscription
              </NuxtLink>
            </template>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/auth';
import { toast } from 'vue3-toastify';
import { navigateTo } from 'nuxt/app';

const { isAuthenticated, logout } = useAuth();
const mobileMenuOpen = ref(false);

const handleLogout = async () => {
  try {
    await logout();
    toast.success('Déconnexion réussie');
    navigateTo('/login');
  } catch (error) {
    toast.error('Erreur lors de la déconnexion');
  }
};
</script>
