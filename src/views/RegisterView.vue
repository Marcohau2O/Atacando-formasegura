<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-3xl font-extrabold text-center text-gray-800">Registrarse</h2>

      <form @submit.prevent="register">
        <!-- <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input v-model="name" type="text" placeholder="Enter your username" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div> -->

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input v-model="email" type="text" placeholder="Enter your email" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input v-model="password" type="password" placeholder="******" autocomplete="on" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <input v-model="confirmPassword" type="password" placeholder="******" autocomplete="on" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </div>

        <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore';
import { ref, computed } from 'vue';

// const name = ref('')
const email = ref('')
const password = ref()
const confirmPassword = ref()
const errorMessage = ref('')

const authStore = useAuthStore()
const router = useRouter()

const isValidFields = computed(() => {
  return (
    email.value.trim() !== '' && password.value.trim() !== '' && confirmPassword.value.trim() !== ''
  )
})

const isValidPassword = computed(() => {
  return password.value.trim().length >= 6 && password.value === confirmPassword.value
})

const register = async () => {
  if (isValidFields.value && isValidPassword.value) {
    authStore.register(email.value, password.value).then(() => {
    })
  }
}
</script>