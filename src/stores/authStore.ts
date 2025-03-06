import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core'
import { LoginService, RegisterService, LogoutService } from '@/services/userServices'

import type { User } from '@/interfaces/User';
import router from '@/router';

export const useAuthStore = defineStore('auth', () => {
  const user = ref({} as User);
  const token = useStorage('token', '');
  const isLoggedIn = computed(() => token.value !== '' && token.value !== undefined);

  async function login(email: string, password: string) {
    try {
      const response = await LoginService(email, password)
      if (response && response.status === 200) {
        user.value = response.data
        token.value = response.value.token
        console.log("Token recibido:", response.data.token);
      }
      router.push('/dashboard')
    } catch (error: any) {
      const errorMessage = 'Error during login'
      console.error(errorMessage, error)
    }
  }

  async function register(email: string, password: string) {
    try {
      const response = await RegisterService(email, password)
      if (response.status === 200) {
        user.value = response.data
        token.value = response.value.token
      }
      router.push('/login')
    } catch (error: any) {
      const errorMessage = 'Error during registration'
      console.error(errorMessage, error)
    }
  }

  async function logout() {
    try {
      const response = await LogoutService()
      console.log('Logout response:', response);
      if (response.status === 200) {
        user.value = {} as User
        token.value = '';
      }
      await router.push('/login')
    } catch (error: any) {
      const errorMessage = 'Error during logout'
      console.error(errorMessage, error)
    }
  }

  return { login, register, logout, isLoggedIn, token }
})


