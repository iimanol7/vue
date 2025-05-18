import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useEmployeeStore = defineStore('counter', {
  state: () => ({

    empleados : [],
    departamentoSeleccionado : ''

  }),


  actions : {

    async cargarEmpleados(){
      const response = await axios.get('Empleados.json')
      this.empleados = response.data
    },

    añadirEmpleado(empleado){
      this.empleados.push(empleado)
    }

  },

  getters : {
    
    totalEmpleados(){
      return this.empleados.length
    },

    salarioPromedio(){
      let suma = this.empleados.reduce((acumulador, empleado)=>acumulador+=empleado.salary, 0) 
      return suma / this.empleados.length
      // let suma = 0
      // this.empleados.forEach(empleado=>{
      //   suma+=empleado.salary
      // })
    },

    filtrarDepartamento(){
      if (this.departamentoSeleccionado == '') return this.empleados 
      return this.empleados.filter(emp => emp.department.toLowerCase().includes(this.departamentoSeleccionado.toLowerCase()))
      
    },
    empleadosPorDepartamento(){
      return this.empleados.reduce((acc, emp) => {
        acc[emp.department] = (acc[emp.department] || 0) + 1;
        return acc;
      }, {});
    }

  }
})
