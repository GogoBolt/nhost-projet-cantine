import { ref, computed } from 'vue';
import { useNuxtApp } from 'nuxt/app';
import { toast } from 'vue3-toastify'; 

export const useAuth = () => {
 
  const $nhost = useNuxtApp().$nhost as any;
  const user = computed(() => $nhost.auth.getUser());
  const isAuthenticated = computed(() => $nhost.auth.isAuthenticated());
  const isLoading = ref(false);

  const login = async (email: string, password: string) => {
    isLoading.value = true;
    try {
      const { error, session } = await $nhost.auth.signIn({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      toast.success('Connexion réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur de connexion');
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (email: string, password: string, role: string = 'user') => {
    isLoading.value = true;
    try {
      const { error, session } = await $nhost.auth.signUp({
        email,
        password,
        options: {
          defaultRole: role,
          allowedRoles: [role],
        },
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      toast.success('Inscription réussie');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur lors de l\'inscription');
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => {
    isLoading.value = true;
    try {
      const { error } = await $nhost.auth.signOut();
      if (error) {
        toast.error(error.message);
        return false;
      }
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur lors de la déconnexion');
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  const updateProfile = async (data: any) => {
    isLoading.value = true;
    try {
      const { error } = await $nhost.auth.updateUser(data);
      if (error) {
        toast.error(error.message);
        return false;
      }
      toast.success('Profil mis à jour avec succès');
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur lors de la mise à jour du profil');
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
  };
};