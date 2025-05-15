<template>
    <table border="1">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Departamento</th>
                <th>Salario</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados">
                <td>{{ empleado.name }}</td>
                <td>{{ empleado.department }}</td>
                <td>{{ empleado.salary }}</td>
            </tr>
        </tbody>
    </table>
<br><br>
<h2>Añadir empleados</h2>
    <form @submit.prevent="añadirEmpleado">
        <input v-model="nombre" type="text" placeholder="nombre">
        <input v-model="depar" type="text" placeholder="departamento">
        <input v-model="salario" type="number" placeholder="salario">
        <button>añadir</button>
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore';
const empleados = ref([])
const employeeStore = useEmployeeStore()

const nombre = ref('')
const depar = ref('')
const salario = ref('')

const añadirEmpleado = ()=>{
    employeeStore.añadirEmpleados({
        name : nombre.value,
        department : depar.value,
        salary : salario.value
    })
    
}

onMounted(async ()=>{
    empleados.value = [...await employeeStore.cargarEmpleados()];
})
</script>

