<template>

<h1>Empleados</h1>

<select v-model="departamentoSeleccionado">
    <option value="Todos">Todos</option>
    <option :value="departamento" v-for="departamento in departamentos">{{ departamento }}</option>
</select>
<br>
<br>

<table border="1">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Salario</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(empleado, index) in empleados" :key="index" :class="{'none' : departamentoSeleccionado === empleado.department}">
            <td>{{ empleado.name }}</td>
            <td>{{ empleado.department }}</td>
            <td>{{ empleado.salary }}</td>
        </tr>
    </tbody>
</table>

<p>{{ departamentoSeleccionado }}</p>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore';

const employeeStore = useEmployeeStore();
const empleados = ref([])
const departamentos = ref([])
const departamentoSeleccionado = ref('Todos')


onMounted(async ()=>{
    empleados.value = await employeeStore.cargarEmpleados();
    
   departamentos.value = employeeStore.filtrarEmpleados()
})

</script>

<style scoped>
    .none{
        display: none;
    }
</style>

