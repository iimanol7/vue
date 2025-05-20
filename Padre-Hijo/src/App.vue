<template>
  <div>
    <Hijo :mensaje="mensajeDelPadre" style="border: 1px solid black;"/>
    <button @click="cambiarMensaje">Cambiar Mensaje</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hijo from './Hijo.vue';

// Definimos una propiedad reactiva que se pasará al hijo
const mensajeDelPadre = ref('¡Hola desde el componente padre!');

// Función para cambiar el mensaje en el padre
const cambiarMensaje = () => {
  mensajeDelPadre.value = '¡Mensaje actualizado desde el padre!';
}
</script>
