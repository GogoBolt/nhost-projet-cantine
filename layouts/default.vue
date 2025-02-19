<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <slot />
      </div>
    </main>
    <Footer />
    <toast-container position="top-right" />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
</script>