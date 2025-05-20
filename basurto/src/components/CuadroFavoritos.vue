<template>
    <div style="border: 1px solid black; max-width: max-content; padding: 10px;">
        <h2>Favoritos</h2>
        <p>Tienes {{ store.numeroFavoritos }} favoritos:</p>
        <ul>
            <li v-for="servicio in store.favoritos">
                {{ servicio.SERVICIO }}
            </li>
        </ul>

    </div>
</template>

<script setup>
import { useFavoritosStore } from '@/stores/favoritosStore';
const store = useFavoritosStore()
</script>