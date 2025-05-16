<template>
    <select v-model="store.municipioSeleccionado" @change="filtrar">
        <option value="todos">Todos</option>
        <option :value="municipio" v-for="municipio in store.municipios">{{ municipio }}</option>
    </select>
</template>

<script setup>
import { useFestividadesStore } from '@/stores/festividadesStore';
const store = useFestividadesStore();
</script>
