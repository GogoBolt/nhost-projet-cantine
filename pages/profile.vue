<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="flex items-center space-x-4 mb-8">
        <img
          :src="userProfile.avatar || 'https://via.placeholder.com/100'"
          :alt="userProfile.name"
          class="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ userProfile.name || 'Utilisateur' }}</h1>
          <p class="text-gray-600">{{ userProfile.email }}</p>
        </div>
      </div>

      <form @submit.prevent="updateUserProfile" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
          <input
            v-model="profileForm.displayName"
            type="text"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
          <input
            v-model="profileForm.phoneNumber"
            type="tel"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Ville</label>
          <input
            v-model="profileForm.city"
            type="text"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Quartier</label>
          <input
            v-model="profileForm.district"
            type="text"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors"
        >
          Mettre à jour le profil
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">



import { ref } from 'vue';
import { useAuth } from '~/composables/auth'; 
const { user, updateProfile } = useAuth();
const userProfile = ref({
  avatar: '',
  name: '',
  email: '',
});
const profileForm = ref({
  displayName: user.value.name,
  phoneNumber: user.value.phone,
  city: user.value.metadata?.location?.city || '',
  district: user.value.metadata?.location?.district || ''
});

const updateUserProfile = async () => {
  await updateProfile({
    displayName: profileForm.value.displayName,
    phoneNumber: profileForm.value.phoneNumber,
    metadata: {
      location: {
        city: profileForm.value.city,
        district: profileForm.value.district
      }
    }
  });
};
</script>