<template>
    <h2>Añadir empleado</h2>
    <form @submit.prevent="añadirEmpleado">
        <input type="text" placeholder="Nombre" v-model="nombre">
        <input type="text" placeholder="Departamento" v-model="depart">
        <input type="number" placeholder="Salario" v-model="salario">
        <button>Crear</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useEmployeeStore } from '@/stores/employeeStore';
const store = useEmployeeStore()

const nombre = ref('')
const depart = ref('')
const salario = ref('')

const añadirEmpleado = ()=>{
    store.añadirEmpleado({
        'name' : nombre.value,
        'department' : depart.value,
        'salary' : salario.value
    })
}
</script>

