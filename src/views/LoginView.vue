<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-3xl font-extrabold text-center text-gray-800">Login</h2>

      <form @submit.prevent="handleLogin" novalidate>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your username"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="******"
            autocomplete="on"
            required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

const name = ref('')
const password = ref('')
const errorMessage = ref('')

const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    await authStore.login(name.value, password.value)
    if (authStore.isLoggedIn) {
      console.log('Login successful')
      router.push('/dashboard')
    } else {
      errorMessage.value = 'Invalid credentials'
    }
  } catch (error) {
    errorMessage.value = 'Login failed'
    console.error(error)
  }
}
</script>
