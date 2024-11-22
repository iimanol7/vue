<template>
  <h1>NOTAS</h1>
  <hr>

  <input type="text" placeholder="Introduce una nota" v-model="nota"> 
  <input type="submit" value="Añadir" @click="añadirNota">
  <br>
  <ul>
    <li v-for="(notaa, index) in notas" :key="index">
      <input type="text" v-model="notaa.texto" :disabled="!notaa.editable">
      <button @click="eliminarNota(index)">Eliminar</button>

      <button @click="editarNota(index)">
        {{ notaa.editable ? "Guardar" : "Editar" }}
      </button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const nota = ref('');
const notas = ref([]);


const añadirNota = () => {
  //añado la nota con un campo 'editable'. para poder modificar el estado del cada input
    notas.value.push({ texto: nota.value, editable: false });
};


const eliminarNota = (index) => {
  // Elimina la nota en el indice
  notas.value.splice(index, 1);
};


const editarNota = (index) => {
  //cambio el valor del campo "editable"
  notas.value[index].editable = !notas.value[index].editable;
};
</script>
