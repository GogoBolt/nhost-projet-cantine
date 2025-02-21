<template>
  <!-- Template reste inchangé -->
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuth } from '~/composables/auth';

interface UserProfile {
  avatar: string;
  displayName: string;
  email: string;
}

interface ProfileForm {
  displayName: string;
  phoneNumber: string;
  city: string;
  district: string;
}

const { user, updateProfile } = useAuth();

const userProfile = computed<UserProfile>(() => ({
  avatar: user.value?.avatarUrl || '',
  displayName: user.value?.displayName || '',
  email: user.value?.email || ''
}));

const profileForm = ref<ProfileForm>({
  displayName: user.value?.displayName || '',
  phoneNumber: user.value?.phoneNumber || '',
  city: (user.value?.metadata as any)?.location?.city || '',
  district: (user.value?.metadata as any)?.location?.district || ''
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