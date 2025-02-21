import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import { useAuth } from '~/composables/auth';
import type { RouteLocationNormalized } from 'vue-router';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  const { isAuthenticated, getUserRole } = useAuth();
  const publicRoutes = ['/', '/login', '/register', '/contact'];

  // Allow access to public routes
  if (publicRoutes.includes(to.path)) {
    return;
  }

  // Check if user is authenticated
  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }

  // Handle role-based routing
  if (to.path.startsWith('/dashboard')) {
    const userRole = getUserRole.value;
    const allowedRoles: Record<string, string[]> = {
      '/dashboard/admin': ['admin'],
      '/dashboard/parent': ['parent'],
      '/dashboard/staff': ['staff'],
      '/dashboard/teacher': ['teacher'],
      '/dashboard/developer': ['developer'],
      '/dashboard/supervisor': ['supervisor']
    };

    // Check if user has permission to access the route
    const routeRoles = allowedRoles[to.path];
    if (routeRoles && !routeRoles.includes(userRole as string)) {
      // Redirect to appropriate dashboard based on role
      return navigateTo(`/dashboard/${userRole}`);
    }
  }
});