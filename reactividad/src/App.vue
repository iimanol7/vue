<template>
  <p>Contador: {{ contador }}</p>
  <br>
  <button @click="decrementar">-</button>
  <br>
  <button @click="resetear">reset</button>
  <br>
  <button @click="incrementar">+</button>
</template>


<script setup>
//importamos la reactividad
import { ref } from "vue";
//declaro la variable como reactiva
const contador = ref(0)
function incrementar() {
  //incremento la variable.
  contador.value++ //SIEMPRE HAY QUE PONER VALUE
}
function decrementar() {
  //incremento la variable.
  contador.value-- //SIEMPRE HAY QUE PONER VALUE
}
function resetear() {
  //incremento la variable.
  contador.value = 0 //SIEMPRE HAY QUE PONER VALUE
}
</script>