<template>

<Basurto></Basurto>

<div>
    <h1>Servicios por pabellon</h1>
    <select v-model="pabellonSeleccionado">
        <option value="Todos">Todos</option>
        <option :value="pabellon" v-for="pabellon in pabellones">{{ pabellon }}</option>
    </select>
    
    <ul>
        <li v-for="servicio in serviciosPorPabellon">
            {{ servicio.SERVICIO }}
        </li>
    </ul>
</div>

</template>

<script setup>
import Basurto from '@/components/Basurto.vue';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';

const pabellonSeleccionado = ref('Todos')
const servicios = ref([])
const pabellones = ref(null)

//al cambiar la seleccion
const serviciosPorPabellon = computed(()=>{
    if (pabellonSeleccionado.value === 'Todos') return servicios.value
    return servicios.value.filter(f=>f.ENTRADA === pabellonSeleccionado.value)
})

onMounted(async ()=>{
    try {
        const response = await axios.get('basurto.json')
        servicios.value = response.data
        
        const set = new Set()
        servicios.value.forEach(s=>set.add(s.ENTRADA))
    
        pabellones.value = set
        
    } catch (error) {
        console.error(error)
    }
})
</script>

