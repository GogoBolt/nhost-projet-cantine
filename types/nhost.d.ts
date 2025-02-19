// types/nhost.ts
export interface NhostAuthMethods {
  signIn(arg0: { email: string; password: string; }): { session: any; error: any; } | PromiseLike<{ session: any; error: any; }>;
  register: (email: string, password: string, role?: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
  loginWithProvider: (provider: string) => Promise<boolean>;  // Ajouter la méthode ici
  
}

// Étendre le type global pour Nuxt
declare module '#app' {
  interface NuxtApp {
    auth: NhostAuthMethods;
  }
}

// Étendre le type global pour Vue
declare module 'vue' {
  interface ComponentCustomProperties {
    $auth: NhostAuthMethods;
  }
}
