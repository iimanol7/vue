<template>

    <h1>RESUMEN DE LA EMPRESA</h1>
    <h2>Total de empleados : {{ numeroEmpleados }}</h2>
    <h2>Salario medio : {{ salarioMedio }}</h2>

    <RouterLink to="/employees">employees</RouterLink><br>
    <RouterLink to="/stats">stats</RouterLink><br>
    <RouterLink to="/add-employee">Add employee</RouterLink>

</template>

<script setup>
    import { computed, onMounted, ref } from 'vue';
    import axios from 'axios'
    import { useEmployeeStore } from '@/stores/employeeStore';
    const employeeStore = useEmployeeStore();

    const empleados = ref([])
    const salarioMedio = ref(0)
    const numeroEmpleados = ref(0)

    onMounted(async ()=>{
        //ejecutar el action
        const response = await employeeStore.cargarEmpleados();
        empleados.value = response
        //ejecutamos los getters getter
        salarioMedio.value = employeeStore.salarioMedio
        numeroEmpleados.value = employeeStore.totalEmpleados
    })
</script>

<style scoped>

</style>