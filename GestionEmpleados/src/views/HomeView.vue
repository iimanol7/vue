<template>
    <h1>RESUMEN DE LA EMPRESA</h1>

    <h3>Total empleados: {{ store.totalEmpleados }}</h3>

    <h3>Salario promedio: {{ store.salarioPromedio }}</h3>

</template>

<script setup>
import { onMounted } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore';
const store = useEmployeeStore();

onMounted(()=>{
    store.cargarEmpleados()
})
</script>

