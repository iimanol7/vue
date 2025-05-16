<template>
    <h1>Próximas festividades</h1>
    <ul>
        <li v-for="festividad in store.futuras">{{ festividad.nombre }} - {{ festividad.municipio }} - {{ festividad.fecha }}</li>
    </ul>
</template>

<script setup>
import { useFestividadesStore } from '@/stores/festividadesStore';
import { onMounted } from 'vue';
const store = useFestividadesStore()
onMounted(()=>{
    store.futuras
})
</script>

