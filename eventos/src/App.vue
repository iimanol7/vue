<template>
  <button @click="botonPulsado('derecho')" @click.middle="botonPulsado('central')" @click.right.prevent="botonPulsado('izquiero')">Polla para Mister Monster</button>
</template>

<script setup>
  function botonPulsado(texto){
    alert('has pulsado el click '+texto)
  }
</script>

