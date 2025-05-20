<template>
  <div>
    <Hijo @nombreEmit="manejarMensajeDelHijo" />
    <p>Mensaje recibido del hijo: {{ mensajeDelHijo }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Hijo from './Hijo.vue';

// Propiedad reactiva para almacenar el mensaje recibido del hijo
const mensajeDelHijo = ref('');

// Función para manejar el mensaje enviado desde el hijo
const manejarMensajeDelHijo = (nuevoMensaje) => {
  mensajeDelHijo.value = nuevoMensaje;
}
</script>
