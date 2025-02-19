<template>
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold text-gray-900">Gestion des menus</h2>
      <button
        @click="showAddMenuModal = true"
        class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Ajouter un menu
      </button>
    </div>

    <!-- Liste des menus -->
    <div class="space-y-4">
      <div v-for="menu in menus" :key="menu.id" class="border rounded-lg p-4">
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-medium text-gray-900">{{ menu.date }}</h3>
            <div class="mt-2 space-y-1">
              <p class="text-sm text-gray-600">
                <span class="font-medium">Entrée:</span> {{ menu.starter }}
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">Plat:</span> {{ menu.mainCourse }}
              </p>
              <p class="text-sm text-gray-600">
                <span class="font-medium">Dessert:</span> {{ menu.dessert }}
              </p>
            </div>
          </div>
          <div class="flex space-x-2">
            <button
              @click="editMenu(menu)"
              class="text-primary-600 hover:text-primary-700"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              @click="deleteMenu(menu.id)"
              class="text-red-600 hover:text-red-700"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal d'ajout/modification de menu -->
    <TransitionRoot appear :show="showAddMenuModal" as="template">
      <Dialog as="div" @close="showAddMenuModal = false" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 mb-4">
                  {{ editingMenu ? 'Modifier le menu' : 'Ajouter un menu' }}
                </DialogTitle>

                <form @submit.prevent="saveMenu" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      v-model="menuForm.date"
                      type="date"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Entrée
                    </label>
                    <input
                      v-model="menuForm.starter"
                      type="text"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Plat principal
                    </label>
                    <input
                      v-model="menuForm.mainCourse"
                      type="text"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Dessert
                    </label>
                    <input
                      v-model="menuForm.dessert"
                      type="text"
                      required
                      class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600"
                    />
                  </div>

                  <div class="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      @click="showAddMenuModal = false"
                      class="px-4 py-2 text-gray-700 hover:text-gray-900"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {{ editingMenu ? 'Modifier' : 'Ajouter' }}
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from '@headlessui/vue';
import { toast } from 'vue3-toastify';

interface Menu {
  id: string;
  date: string;
  starter: string;
  mainCourse: string;
  dessert: string;
}

const showAddMenuModal = ref(false);
const editingMenu = ref<Menu | null>(null);
const menuForm = ref({
  date: '',
  starter: '',
  mainCourse: '',
  dessert: ''
});

// Exemple de menus (à remplacer par les données de la base de données)
const menus = ref<Menu[]>([
  {
    id: '1',
    date: '2025-03-01',
    starter: 'Salade de tomates',
    mainCourse: 'Poulet rôti et pommes de terre',
    dessert: 'Yaourt aux fruits'
  },
  {
    id: '2',
    date: '2025-03-02',
    starter: 'Soupe de légumes',
    mainCourse: 'Poisson pané et riz',
    dessert: 'Fruit de saison'
  }
]);

const editMenu = (menu: Menu) => {
  editingMenu.value = menu;
  menuForm.value = { ...menu };
  showAddMenuModal.value = true;
};

const deleteMenu = async (id: string) => {
  try {
    // TODO: Supprimer le menu dans la base de données
    menus.value = menus.value.filter(menu => menu.id !== id);
    toast.success('Menu supprimé avec succès');
  } catch (error) {
    toast.error('Erreur lors de la suppression du menu');
  }
};

const saveMenu = async () => {
  try {
    if (editingMenu.value) {
      // TODO: Mettre à jour le menu dans la base de données
      const index = menus.value.findIndex(m => m.id === editingMenu.value?.id);
      if (index !== -1) {
        menus.value[index] = { ...editingMenu.value, ...menuForm.value };
      }
      toast.success('Menu mis à jour avec succès');
    } else {
      // TODO: Ajouter le menu dans la base de données
      const newMenu = {
        id: Date.now().toString(),
        ...menuForm.value
      };
      menus.value.push(newMenu);
      toast.success('Menu ajouté avec succès');
    }
    showAddMenuModal.value = false;
    editingMenu.value = null;
    menuForm.value = {
      date: '',
      starter: '',
      mainCourse: '',
      dessert: ''
    };
  } catch (error) {
    toast.error('Erreur lors de l\'enregistrement du menu');
  }
};
</script>