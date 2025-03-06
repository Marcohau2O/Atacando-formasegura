<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-r">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
      <h2 class="text-3xl font-extrabold text-center text-gray-800">Login</h2>

      <form @submit.prevent="handleLogin" novalidate>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">email</label>
          <input v-model="email" type="text" placeholder="Enter your email" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input v-model="password" type="password" placeholder="******" autocomplete="on" required
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>

        <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Login
        </button>
      </form>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { useAuthStore } from '@/stores/authStore'
import type { FormValues } from '../interfaces/Form'
import { useForm } from 'vee-validate'
import * as yup from 'yup'


const authStore = useAuthStore()
const { values, errors, defineField, handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Correo incorrecto').required('El correo es requerido'),
    password: yup
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
  }),
})

const [email, emailAttrs] = defineField('email', {
  validateOnModelUpdate: true,
})

const [password, passwordAttrs] = defineField('password', {
  validateOnModelUpdate: true,
})


const handleLogin = handleSubmit((values: FormValues) => {
  authStore.login(values.email, values.password)
});
</script>
