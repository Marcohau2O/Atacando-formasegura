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

</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  localStorage.removeItem('token')
  router.push('/login');
};
</script>