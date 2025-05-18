<template>
    <h1>Lista de empleados</h1>
    <br>

    <input type="text" v-model="store.departamentoSeleccionado">

    <br>
    <ul>
        <li v-for="empleado in store.filtrarDepartamento">
            {{ empleado.name }} - {{ empleado.department }} - {{ empleado.salary }}
        </li>
    </ul>

    <AddEmployee></AddEmployee>
    <EmployeeStats></EmployeeStats>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/employeeStore';
import { onMounted } from 'vue';
import AddEmployee from './AddEmployee.vue';
import EmployeeStats from './EmployeeStats.vue';
const store = useEmployeeStore()

 

onMounted(()=>{
    store.cargarEmpleados()
})
</script>

