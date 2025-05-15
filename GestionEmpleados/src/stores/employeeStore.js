import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useEmployeeStore = defineStore('counter', {
  state: () => ({
    empleados : []
  }),

  actions : {

    async cargarEmpleados(){
      const response = await axios.get('Empleados.json')
      this.empleados = response.data
      return this.empleados
    },

    filtrarEmpleados(){
      //filtrar por departamento
      const departamentos = new Set() //filtra y elimina los duplicados
      this.empleados.forEach(empleado =>{
        departamentos.add(empleado.department)
      })
      return departamentos
    }

  },

  getters : {
    
    salarioMedio(){
      let salario = 0
      this.empleados.forEach(empleado=>{
        salario += empleado.salary
      })
      return salario / this.empleados.length
    },

    totalEmpleados(){
      return this.empleados.length
    }

  }
})
