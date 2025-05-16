<template>
    <h3>Listado de festividades en vizcaya</h3>
    <FiltradoFestividades></FiltradoFestividades>
{{ store.municipioSeleccionado }}
    <ul>
        <li v-for="(festividad, index) in store.festividadesFiltradas">
            {{ festividad.nombre }} - {{ festividad.municipio }} - {{ festividad.fecha }} - 
            <input type="checkbox" :checked="festividad.asistido" @change="store.toggleAsistido(index)">
        </li>
    </ul>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFestividadesStore } from '@/stores/festividadesStore';
import FiltradoFestividades from '@/components/FiltradoFestividades.vue';
//desde qui se accede a los variables getters y funciones
const store = useFestividadesStore();
//no se meten las cosas en variables porque pierden la reactividad

// const filtrar = ()=>{
//     store.festividadesFiltradas
// }

onMounted(() => {
    store.cargarFestividades()
})
</script>
