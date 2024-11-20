<template>
  <h1>NOTAS</h1>
  <hr>

  <input type="text" placeholder="Introduce una nota" v-model="nota"> <input type="submit" value="añadir" @click="añadirNota">
  <br>
  <ul>
    <li v-for=" (notaa) in notas">
      {{ notaa }}
      <button @click="eliminarNota">ELiminar</button>
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";
const nota = ref('')
const notas = ref([])

const añadirNota = ()=>{
  notas.value.push(nota.value) 
}

const eliminarNota = (index) => {
  notas.value.splice(index, 1); // Elimina 1 elemento en el índice especificado
};
</script>
