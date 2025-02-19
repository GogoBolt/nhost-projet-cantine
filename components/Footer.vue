<template>
  <footer class="bg-white/80 backdrop-blur-md border-t mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Logo et description -->
        <div>
          <div class="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" class="h-10 w-10 mr-3 rounded-lg object-cover" />
            <span class="text-2xl font-bold text-primary-600">GogoSoft</span>
          </div>
          <p class="text-gray-600">
            Solutions innovantes pour la gestion de cantines scolaires. Nous créons des expériences numériques exceptionnelles.
          </p>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Navigation</h3>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/" class="text-gray-600 hover:text-primary-600 transition-colors">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-600 hover:text-primary-600 transition-colors">À propos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-600 hover:text-primary-600 transition-colors">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">Contact</h3>
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              2024dibo@gmail.com
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              07 58 96 61 56
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Abidjan, Côte d'Ivoire
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-200/50 text-center text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} GogoSoft. Tous droits réservés.</p>
        <p class="mt-2 text-sm">
          En cas de problème, contactez Thierry Gogo (Développeur Fullstack) : 07 58 96 61 56
        </p>
      </div>
    </div>
  </footer>
</template>