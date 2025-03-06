<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-blue-900 text-white min-h-screen p-5">
      <h2 class="text-2xl font-bold mb-8">Dashboard</h2>
      <nav>
        <ul>
          <li class="mb-4">
            <RouterLink to="/home" class="block p-2 rounded hover:bg-blue-700">Home</RouterLink>
          </li>
          <li class="mb-4">
            <RouterLink to="/profile" class="block p-2 rounded hover:bg-blue-700">Profile</RouterLink>
          </li>
          <li>
            <button @click="logout" class="w-full text-left p-2 rounded bg-red-600 hover:bg-red-700">Logout</button>
          </li>
        </ul>
      </nav>
    </aside>

    <Ataque/>
  </div>


</template>

<script setup lang="ts">
import Ataque from '@/components/Attacks/XSSComponent.vue'
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const logout = async () => {
  try {
    const response = await authStore.logout();
    if (response.status === 200 && response.data.deleted === 1) {
      authStore.setToken(''); // Limpia el token
      localStorage.removeItem('token');
    } else {
      console.error('Logout failed:', response.data.error || 'Token was not invalidated.');
    }
  } catch (error) {
    console.log("Error al cerrar sesión", error.message || error);
  }
};
</script>