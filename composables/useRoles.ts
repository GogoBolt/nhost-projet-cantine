import { ref, computed } from 'vue';
import { useNuxtApp } from 'nuxt/app';
import type { NhostClient } from '@nhost/nhost-js';

interface Role {
  id: string;
  name: string;
  description: string;
}

export const useRoles = () => {
  const { $nhost } = useNuxtApp();
  const nhost = $nhost as NhostClient;
  
  const roles = ref<Role[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchRoles = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data, error: queryError } = await nhost.graphql.request(`
        query GetRoles {
          roles {
            id
            name
            description
          }
        }
      `);
      
      if (queryError) throw queryError;
      roles.value = data.roles;
    } catch (e) {
      error.value = e as Error;
      console.error('Error fetching roles:', e);
    } finally {
      loading.value = false;
    }
  };

  const assignRole = async (userId: string, roleId: string) => {
    try {
      const { data, error: mutationError } = await nhost.graphql.request(`
        mutation AssignRole($userId: uuid!, $roleId: uuid!) {
          insert_user_roles_one(object: {
            user_id: $userId,
            role_id: $roleId
          }) {
            user_id
            role_id
          }
        }
      `, {
        userId,
        roleId
      });

      if (mutationError) throw mutationError;
      return data.insert_user_roles_one;
    } catch (e) {
      console.error('Error assigning role:', e);
      throw e;
    }
  };

  const removeRole = async (userId: string, roleId: string) => {
    try {
      const { data, error: mutationError } = await nhost.graphql.request(`
        mutation RemoveRole($userId: uuid!, $roleId: uuid!) {
          delete_user_roles(where: {
            user_id: { _eq: $userId },
            role_id: { _eq: $roleId }
          }) {
            affected_rows
          }
        }
      `, {
        userId,
        roleId
      });

      if (mutationError) throw mutationError;
      return data.delete_user_roles.affected_rows;
    } catch (e) {
      console.error('Error removing role:', e);
      throw e;
    }
  };

  return {
    roles: computed(() => roles.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    fetchRoles,
    assignRole,
    removeRole
  };
};