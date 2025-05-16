<template>
    <h3>Número de festividades: {{ store.totalFestividades }}</h3>
    <h3>Festividades asistidas : {{ store.totalAsistidas }}</h3>
    <h3>Municipios con multiples festividades: </h3>
    <ul>
        <li v-for="municipio in store.municipiosConMultiples">{{ municipio }}</li>
    </ul>
</template>

<script setup>
import { useFestividadesStore } from '@/stores/festividadesStore';
import { onMounted } from 'vue';
const store = useFestividadesStore();

onMounted(()=>{
    // store.cargarFestividades()
})
</script>
