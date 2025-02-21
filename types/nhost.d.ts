import { NhostClient } from '@nhost/nhost-js';

export interface NhostAuthResponse {
  session: any;
  error: any;
}

export interface NhostAuthMethods {
  signIn(credentials: { email: string; password: string }): Promise<NhostAuthResponse>;
  signUp(credentials: { 
    email: string; 
    password: string;
    options?: {
      defaultRole?: string;
      allowedRoles?: string[];
      metadata?: Record<string, any>;
    }
  }): Promise<NhostAuthResponse>;
  signOut(): Promise<{ error: any }>;
  getUser(): any;
  isAuthenticated(): boolean;
  refreshSession(): Promise<{ error: any }>;
  resetPassword(email: string): Promise<{ error: any }>;
  changePassword(newPassword: string): Promise<{ error: any }>;
  changeEmail(newEmail: string): Promise<{ error: any }>;
}

declare module '#app' {
  interface NuxtApp {
    $nhost: NhostClient;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $nhost: NhostClient;
  }
}