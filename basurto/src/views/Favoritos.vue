<template>

<Basurto></Basurto>

<h1>Tienes {{ store.numeroFavoritos }} favoritos</h1>

<ul>
    <li v-for="servicio in store.favoritos">
        {{ servicio.SERVICIO }} - <img :src="eliminar" width="20px" style="cursor: pointer;" @click="store.eliminarFavoritos(servicio)">
    </li>
</ul>

</template>

<script setup>
import Basurto from '@/components/Basurto.vue';
import eliminar from '@/assets/img/eliminar.png'
import { useFavoritosStore } from '@/stores/favoritosStore';
const store = useFavoritosStore()
</script>

<style scoped>

</style>