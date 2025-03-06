<template>
    <!-- <section
      class="mb-12 p-6 rounded-lg shadow-sm bg-base-100 transition-all duration-300 hover:shadow-md"
      style="min-height: 100vh"
    >
      <div id="XSS">
        <h2 class="text-2xl font-bold mb-4">Cross-Site Scripting (XSS)</h2>
        <p class="mb-4">
          XSS permite inyectar scripts maliciosos en páginas web vistas por otros usuarios.
        </p>
        <form @submit.prevent="submitXSS" class="mb-4">
          <label for="xssInput" class="block mb-2">Introduce un script:</label>
          <input
            autocomplete="false"
            id="xssInput"
            v-model="xssInput"
            class="input input-bordered w-full mb-4"
          />
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <div v-html="xssOutput" class="prose mb-4"></div>
        <div>
          <h3 class="text-xl font-bold mb-2">Ejemplos básicos de XSS:</h3>
          <ul class="list-disc list-inside">
            <li v-for="(comment, index) in comments" :key="index" class="mb-2">
              <p v-html="comment.comment"></p>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <button @click="show = !show" type="submit" class="btn btn-primary my-4">Mostrar</button>
        </div>
        <div v-if="show">
          <h3 class="text-xl font-bold mb-2">Prevención de XSS:</h3>
          <p class="mb-2">
            Para prevenir XSS, es importante escapar correctamente los datos de entrada y utilizar
            métodos seguros para renderizar contenido HTML.
          </p>
          <ul class="list-disc list-inside">
            <li>Escapar caracteres especiales en el lado del servidor.</li>
            <li>Utilizar bibliotecas de sanitización de HTML.</li>
            <li>Implementar Content Security Policy (CSP).</li>
          </ul>
        </div>
      </div>
    </section> -->
  </template>
  
  <script setup lang="ts">
//   import { ref, onMounted } from 'vue'
  
// // Definición de interfaces para una mejor tipificación
// interface Comment {
//   comment: string;
//   user_id?: number;
// }

// // Variables y referencias
// const xssInput = ref<string>("");
// const xssOutput = ref<string>("");
// const comments = ref<Comment[]>([]);
// const show = ref<boolean>(false);

// // Función para enviar comentarios
// const submitXSS = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/attack/xss", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         comment: xssInput.value,
//         user_id: 1,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Error al enviar el comentario");
//     }

//     const data = await response.json();
//     console.log("Comentario enviado:", data);
//     alert(data.message);
//     xssInput.value = "";
//     fetchComments();
//   } catch (error) {
//     console.error("Error al enviar el comentario:", error);
//   }
// };

// // Función para obtener comentarios
// const fetchComments = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/attack/xss?userId=1", {
//       method: "GET",
//     });

//     if (!response.ok) {
//       throw new Error("Error al obtener los comentarios");
//     }

//     const data = await response.json();
//     console.log("Comentarios obtenidos:", data);
//     comments.value = data.results; // Actualiza los comentarios obtenidos del backend
//   } catch (error) {
//     console.error("Error al obtener los comentarios:", error);
//   }
// };

// // Función para alternar la vista de prevención de XSS
// const toggleShow = () => {
//   show.value = !show.value;
// };

// // Ejecuta fetchComments al montar el componente
// onMounted(() => {
//   fetchComments();
// });
</script>