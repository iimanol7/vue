<template>
  <div>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
  'mensaje'
]);

// Declarar las props usando defineProps
// const props = defineProps({
//   mensaje: {
//     type: String,
//     required: true
//   }
// })
</script>
