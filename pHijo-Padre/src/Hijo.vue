<template>
  <div>
    <button @click="enviarMensajeAlPadre">Enviar Mensaje al Padre</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

// Definir el evento que será emitido al padre
const emit = defineEmits(['nombreEmit']);

// Función para enviar el mensaje al padre
const enviarMensajeAlPadre = () => {
  emit('nombreEmit', '¡Hola desde el hijo!');
}
</script>
