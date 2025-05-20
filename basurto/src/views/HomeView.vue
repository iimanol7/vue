<template>
    <div>
        <div style="display: flex; gap: 10px;">
            <router-link to="/">Inicio</router-link>
            <router-link to="/todosServicios">Todos los servicios públicos</router-link>
            <router-link to="/serviciosPabellon">Servicios por pabellon</router-link>
            <router-link to="/favoritos">Favoritos</router-link>
        </div>
        <router-view>

        </router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .div{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 95vh;
        width: 100%;
    }
</style>