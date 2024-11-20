<template>
  <h1>PROPIEDADES COMPUTADAS</h1>
  <hr><br>

  <form>
    <input type="text" placeholder="Nombre" v-model="nombre">
    <input type="text" placeholder="Apellidos" v-model="apellido">
    <input type="number" placeholder="Año de nacimiento" v-model="año">

  </form>
  <p>Nombre Completo: {{ nombreCompleto }}</p>
  <br>
  <p>Edad: {{ edad }}</p>
</template>

<script setup>
  import { ref, computed } from "vue";

  const nombre = ref('')
  const apellido = ref('')
  const año = ref(2000)
    
  const nombreCompleto = computed(()=> `${nombre.value} ${apellido.value}`)

  const edad = computed(()=> {
    const actual = new Date().getFullYear()
    return actual - año.value
  })
  
</script>


