<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
      <p class="text-lg text-gray-600">Notre équipe est là pour répondre à toutes vos questions</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Formulaire de contact -->
      <div class="bg-white p-8 rounded-xl shadow-lg">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
            />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      <!-- Informations de contact -->
      <div class="space-y-8">
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Nos coordonnées</h2>
          <div class="space-y-4">
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Téléphone</p>
                <a href="tel:+2250758966156" class="text-gray-600 hover:text-primary-600">07 58 96 61 56</a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Email</p>
                <a href="mailto:2024dibo@gmail.com" class="text-gray-600 hover:text-primary-600">2024dibo@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">Adresse</p>
                <p class="text-gray-600">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-8 rounded-xl shadow-lg">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h2>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-600">Lundi - Vendredi</span>
              <span class="font-medium text-gray-900">8h00 - 18h00</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Samedi</span>
              <span class="font-medium text-gray-900">9h00 - 13h00</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Dimanche</span>
              <span class="font-medium text-gray-900">Fermé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from '~/composables/useToast';

const toast = useToast();

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = async () => {
  try {
    // TODO: Implémenter l'envoi du formulaire
    toast.success('Message envoyé avec succès !');
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  } catch (error) {
    toast.error('Erreur lors de l\'envoi du message');
  }
};
</script>