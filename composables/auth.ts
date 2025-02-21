import { ref, computed } from 'vue';
import { useNuxtApp } from 'nuxt/app';
import { toast } from 'vue3-toastify';
import type { NhostClient } from '@nhost/nhost-js';

interface UserMetadata {
  [key: string]: unknown; // Ajout pour correspondre à Record<string, unknown>
  role?: string;
  location?: {
    city: string;
    district: string;
  };
}


interface UpdateProfileData {
  displayName?: string;
  phoneNumber?: string;
  metadata?: UserMetadata;
}

export const useAuth = () => {
  const { $nhost } = useNuxtApp();
  const nhost = $nhost as NhostClient;
  
  const user = computed(() => nhost.auth.getUser());
  const isAuthenticated = computed(() => nhost.auth.isAuthenticated());
  const loading = ref<boolean>(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    loading.value = true;
    try {
      const { error, session } = await nhost.auth.signIn({
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
      loading.value = false;
    }
  };

  const register = async (email: string, password: string, role: string = 'user'): Promise<boolean> => {
    loading.value = true;
    try {
      const { error, session } = await nhost.auth.signUp({
        email,
        password,
        options: {
          defaultRole: role,
          allowedRoles: [role],
          metadata: {
            role
          }
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
      loading.value = false;
    }
  };

  const logout = async (): Promise<boolean> => {
    loading.value = true;
    try {
      const { error } = await nhost.auth.signOut();
      if (error) {
        toast.error(error.message);
        return false;
      }
      return true;
    } catch (error: any) {
      toast.error(error.message || 'Erreur lors de la déconnexion');
      return false;
    } finally {
      loading.value = false;
    }
  };

  const updateProfile = async (data: UpdateProfileData): Promise<boolean> => {
  try {
    const mutation = `
      mutation updateUser($id: uuid!, $metadata: jsonb) {
        update_auth_users_by_pk(pk_columns: {id: $id}, _set: {metadata: $metadata}) {
          id
        }
      }
    `;

    const variables = {
      id: user.value?.id, // Récupère l'ID de l'utilisateur
      metadata: data.metadata || {}
    };

    const { error } = await nhost.graphql.request(mutation, variables);

    if (error) {
      toast.error(error);
      return false;
    }

    toast.success('Profil mis à jour avec succès');
    return true;
  } catch (error: any) {
    toast.error(error.message || 'Erreur lors de la mise à jour du profil');
    return false;
  }
};

  
  const getUserRole = computed(() => {
    return (user.value?.metadata as UserMetadata)?.role || 'guest';
  });

  return {
    user,
    isAuthenticated,
    loading: computed(() => loading.value),
    login,
    register,
    logout,
    updateProfile,
    getUserRole
  };
};