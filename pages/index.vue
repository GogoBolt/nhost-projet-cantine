<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
   <!-- Hero Section -->
<section class="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white py-20 min-h-[400px] lg:min-h-[500px]">
  <!-- Conteneur principal -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <!-- Image à gauche -->
    <div class="hidden lg:block absolute left-8 top-1/2 transform -translate-y-1/2 w-1/4">
      <img
        src="/public/images/eleve-table-cantine.png"
        alt="Élève à table dans une cantine scolaire"
        class="rounded-lg shadow-lg animate-fade-in-left"
      />
    </div>

    <!-- Contenu central -->
    <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-20 xl:mb-24 relative z-10">
      <h1 class="text-5xl font-bold mb-6 font-heading animate-fade-in">
        Bienvenue sur GogoSoft Cantine
      </h1>
      <p class="text-xl text-gray-300 mb-8 animate-slide-up">
        La solution moderne pour la gestion de votre cantine scolaire
      </p>
      <div class="space-x-4 animate-slide-up">
        <NuxtLink
          to="/register"
          class="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Commencer gratuitement
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
        >
          Se connecter
        </NuxtLink>
      </div>
    </div>
    <div class="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 w-1/8">
      <img
        src="/public/images/eleve-table-cantine1.png"
        alt="Élève à table dans une cantine scolaire"
        class="rounded-lg shadow-lg animate-fade-in-left"
      />
    </div>
  </div>

  <!-- Decorative wave -->
  <div class="absolute bottom-0 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="w-full h-24 lg:h-32 xl:h-40">
        <path fill="#f9fafb" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</section>

<!-- Section suivante avec fond blanc -->
<!-- <div class="bg-white h-20"></div> -->

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card group hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/public/images/inscription.png"
              alt="Gestion simplifiée"
              class="w-30 h-20 mx-auto mb-4 rounded-lg   group-hover:scale-110 transition-transform duration-300"
            />
            <h2 class="text-xl font-semibold mb-2 text-center">Gestion Simplifiée</h2>
            <p class="text-gray-600 text-center">Gérez les repas de vos enfants en quelques clics</p>
            <NuxtLink
              to="/dashboard"
              class="mt-4 block text-center text-primary-600 hover:text-primary-700 font-medium"
            >
              En savoir plus →
            </NuxtLink>
          </div>

          <div class="card group hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-2">
            <img
               src="/public/images/securiser.png"
              alt="Sécurité"
              class="w-50 h-20 mx-auto mb-4 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <h2 class="text-xl font-semibold mb-2 text-center">Sécurisé</h2>
            <p class="text-gray-600 text-center">Système de QR Code unique pour chaque enfant</p>
            <NuxtLink
              to="/dashboard/parent"
              class="mt-4 block text-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Voir la démonstration →
            </NuxtLink>
          </div>

          <div class="card group hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-2">
            <img
              src="/public/images/recharger.png"
              alt="Paiement"
              class="w-20 h-20 mx-auto mb-4 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <h2 class="text-xl font-semibold mb-2 text-center">Paiement Facile</h2>
            <p class="text-gray-600 text-center">Rechargez les tickets-repas en ligne</p>
            <NuxtLink
              to="/dashboard/parent"
              class="mt-4 block text-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Commencer maintenant →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <img
                 src="/public/images/temoins01.png"
                alt="Utilisateur"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="font-semibold">Marie D.</h3>
                <p class="text-sm text-gray-600">Parent d'élève</p>
              </div>
            </div>
            <p class="text-gray-600">"Une application qui simplifie vraiment la gestion des repas de mes enfants. Plus besoin de gérer l'argent liquide !"</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <img
              src="/public/images/temoins02.png"
                alt="Utilisateur"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="font-semibold">Thomas L.</h3>
                <p class="text-sm text-gray-600">Responsable de cantine</p>
              </div>
            </div>
            <p class="text-gray-600">"Le système de QR code est très pratique et nous fait gagner beaucoup de temps lors du service."</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-4">
              <img
                src="/public/images/ab.png"
                alt="Utilisateur"
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 class="font-semibold">Sophie M.</h3>
                <p class="text-sm text-gray-600">Directrice d'école</p>
              </div>
            </div>
            <p class="text-gray-600">"Une solution moderne qui répond parfaitement aux besoins de notre établissement."</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-primary-900 to-primary-800 text-white p-8 rounded-2xl shadow-xl">
          <h2 class="text-2xl font-semibold mb-4 text-center">Support technique</h2>
          <p class="text-gray-200 mb-6 text-center">En cas de problème ou de bug, notre équipe est là pour vous aider</p>
          <div class="space-y-4 text-center">
            <div>
              <h3 class="font-medium text-xl mb-2">Thierry Gogo</h3>
              <p class="text-gray-200">Développeur Fullstack</p>
            </div>
            <div class="flex flex-col items-center space-y-2">
              <a
                href="tel:+2250758966156"
                class="flex items-center space-x-2 hover:text-primary-200 transition-colors"
              >
                <span>📞</span>
                <span>07 58 96 61 56</span>
              </a>
              <a
                href="mailto:2024dibo@gmail.com"
                class="flex items-center space-x-2 hover:text-primary-200 transition-colors"
              >
                <span>📧</span>
                <span>2024dibo@gmail.com</span>
              </a>
            </div>
            <div class="mt-6">
              <NuxtLink
                to="/contact"
                class="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                Nous contacter
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  @apply bg-white p-6 rounded-lg shadow-lg;
}
</style>
