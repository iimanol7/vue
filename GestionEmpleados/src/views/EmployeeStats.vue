<template>
    <h2>Empleados por departamento</h2>
    <ul>
        <li v-for="(num, depar) in store.empleadosPorDepartamento">
            <b>{{ depar }}: </b>{{ num }}
        </li>
    </ul>
</template>

<script setup>
import { useEmployeeStore } from '@/stores/employeeStore';
const store = useEmployeeStore()
</script>

<style scoped>

</style>