<template>
  <div class="max-w-md mx-auto">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Connexion</h1>
        <p class="mt-2 text-gray-600">Bienvenue sur GogoSoft Cantine</p>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
            placeholder="vous@exemple.com"
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-colors"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 transition-colors"
        >
          Se connecter
        </button>

        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">Ou continuer avec</span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <button
            type="button"
            @click="() => loginWithProvider('google')"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
          </button>

          <button
            type="button"
            @click="() => loginWithProvider('facebook')"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </button>

          <button
            type="button"
            @click="() => loginWithProvider('github')"
            class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </button>
        </div>
      </form>

      <div class="mt-8 text-center">
        <p class="text-sm text-gray-600">
          Pas encore de compte ? 
          <NuxtLink to="/register" class="font-medium text-primary-600 hover:text-primary-700 transition-colors">
            S'inscrire
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp, navigateTo }from 'nuxt/app';
import { signInEmailOTPPromise } from '@nhost/nhost-js';
import type { NhostAuthMethods } from '~/types/nhost';
const { auth } = useNuxtApp() as unknown as { auth: NhostAuthMethods };
const email = ref('');
const password = ref(''); 

const handleLogin = async () => {
  try {
    const { session, error } = await auth.signIn({
      email: email.value,
      password: password.value,
    });

    if (error) {
      console.error(error.message);
    } else {
      navigateTo('/dashboard');
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
  }
};

const loginWithProvider = async (provider: string) => {
  try {
    const { session, error } = await auth.signIn({
      email: '',
      password: ''
    });
    
    if (error) {
      console.error(`Erreur avec ${provider}:`, error.message);
    } else {
      navigateTo('/dashboard');
    }
  } catch (error) {
    console.error(`Erreur lors de la connexion via ${provider}:`, error);
  }
};
</script>