<template>
  <!-- Template reste inchangé -->
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoles } from '~/composables/useRoles';
import { useAuth } from '~/composables/auth';
import { useToast } from '~/composables/useToast';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const selectedRole = ref('parent');
const loading = ref(false);

const { roles, fetchRoles } = useRoles();
const { register } = useAuth();
const toast = useToast();
const router = useRouter();

const availableRoles = computed(() => 
  roles.value.filter(role => ['parent', 'staff', 'teacher'].includes(role.name))
);

onMounted(async () => {
  await fetchRoles();
});

const handleRegister = async () => {
  loading.value = true;
  try {
    const success = await register(email.value, password.value, selectedRole.value);
    if (success) {
      toast.success('Inscription réussie !');
      router.push('/dashboard');
    }
  } catch (error) {
    toast.error('Erreur lors de l\'inscription');
    console.error('Registration error:', error);
  } finally {
    loading.value = false;
  }
};
</script>