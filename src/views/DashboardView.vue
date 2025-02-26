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

    <!-- Main content -->
    <main class="flex-1 p-10">
      <header class="bg-white shadow rounded-lg p-5 mb-10">
        <h1 class="text-3xl font-bold">Welcome, {{ authStore.user?.name }}</h1>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold">Total Users</h2>
          <p class="text-3xl mt-4">1,234</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold">Revenue</h2>
          <p class="text-3xl mt-4">$56,789</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-xl font-semibold">New Orders</h2>
          <p class="text-3xl mt-4">312</p>
        </div>
      </section>
    </main>
  </div>
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