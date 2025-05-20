<template>

<Basurto></Basurto>
<CuadroFavoritos></CuadroFavoritos>

<h1>Todos los servicios</h1>
<input type="text" placeholder="Buscar Servicio" v-model="busqueda">
<table>
    <thead>
        <tr>
            <th>Icono</th>
            <th>Servicio</th>
            <th>Pabellon</th>
            <th>Fav</th>
        </tr>    
    </thead>
    <tbody>
        <tr v-for="servicio in serviciosFiltrados">
            <td></td>
            <td>{{ servicio.SERVICIO }}</td>
            <td>{{ servicio.ENTRADA }}</td>
            <td @click="añadirFavoritos(servicio.SERVICIO)"><img :src="servicio.fav ? corazonRojo : corazon" width="20px"></td>
        </tr>
    </tbody>
</table>

</template>

<script setup>
import Basurto from '@/components/Basurto.vue';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import corazon from '@/assets/img/corazon.png'
import corazonRojo from '@/assets/img/corazon-rojo.png'
import { useFavoritosStore } from '@/stores/favoritosStore';
import CuadroFavoritos from '@/components/CuadroFavoritos.vue';
const store = useFavoritosStore();

const servicios = ref([]);
const busqueda = ref('')

const añadirFavoritos = (servicio)=>{
  //añadimos/eliminamos del array local
    const index = servicios.value.findIndex(f => f.SERVICIO === servicio)
    // servicios.value[index].fav == true ? servicios.value[index].fav=false : servicios.value[index].fav=true
    servicios.value[index].fav = !servicios.value[index].fav

  //añadimos/eliminamos del al store
    if(servicios.value[index].fav === true) store.añadirFavoritos(servicios.value[index]);
    else store.eliminarFavoritos(servicios.value[index]);
}

const serviciosFiltrados = computed(()=>{
    if(busqueda.value == '') return servicios.value
    return servicios.value.filter(f=>f.SERVICIO.toLowerCase().includes(busqueda.value.toLowerCase()))
})

onMounted(async ()=>{
    try {
        const response = await axios.get('basurto.json')
        //filtramos los que no son visibles
        const filtrados = response.data.filter(f=>f.MOSTRAR == 1)
        //añadimos el campo favoritos
        filtrados.forEach(f=>f.fav = false)

        servicios.value = filtrados;
        
    } catch (error) {
        console.error(error)
    }
})

</script>

<style scoped>

</style>