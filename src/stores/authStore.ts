import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core'
import { LoginService, RegisterService, LogoutService } from '@/services/userServices'

import type { User } from '@/interfaces/User';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as User);
  const token = useStorage('token', '');
  const isLoggedIn = computed(() => token.value !== '' && token.value !== undefined);

  async function login(name: string, password: string) {
    try {
      const response = await LoginService(name, password);

      if (response && response.token) {
        user.value = response;
        token.value = response.token;
        console.log('Login successful, token:', token.value);
      } else {
        throw new Error('Login failed: No token received');
      }
    } catch (error: any) {
      console.error('Error during login:', error.message || error);
    }
  }

  async function register(name: string, email: string, password: string, confirmPassword: string) {
    try {
      const response = await RegisterService(name, email, password, confirmPassword)
      if (response.status === 200) {
        user.value = response.data
        token.value = user.value.token
      }
    } catch (error: any) {
      const errorMessage = 'Error during registration'
      console.error(errorMessage, error)
    }
  }

  async function logout() {
    try {
      const response = await LogoutService()
      if (response.status === 200) {
        user.value = {} as User
        token.value = ''
      }
    } catch (error: any) {
      const errorMessage = 'Error during logout'
      console.error(errorMessage, error)
    }
  }

  return { login, register, logout, isLoggedIn, token }
})


