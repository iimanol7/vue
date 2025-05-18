import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFestividadesStore = defineStore('festividades', {
  state: () => ({

    festividades: [],
    municipioSeleccionado: 'todos'

  }),


  actions: {

    async cargarFestividades() {
      const response = await axios.get('festividades.json')
      this.festividades = response.data

      this.festividades.forEach(fest => {
        //le añadimos un nuevo campo a cada festividad
        fest.asistido = false
      })
    },

    toggleAsistido(id) {
      this.festividades[id].asistido = true
    }

  },

  getters: {

    festividadesFiltradas() {
      if (this.municipioSeleccionado == 'todos') return this.festividades
      let filtradas = []
      this.festividades.forEach(fest => {
        fest.municipio == this.municipioSeleccionado ? filtradas.push(fest) : ''
      })
      return filtradas
    },

    municipios() {
      const municipios = new Set()
      this.festividades.forEach(fest => {
        municipios.add(fest.municipio)
      })
      return [...municipios].sort()
    },

    totalFestividades() {
      return this.festividades.length
    },

    totalAsistidas() {
      //recorre el array (como for each) y crea uno nuevo con las que cumplen la condicion
      return this.festividades.filter(f => f.asistido === true).length;
    },

    municipiosConMultiples() {

    },

    
    futuras(){
      //fecha actual
      const date = new Date();
      // (OPCIONAL) creamos una fecha con el mismo formato que en el JSON (SIN TIEMPO)
      const FechaActual = new Date(date.getFullYear(), date.getMonth(), date.getDate())
      //comprobamos cuales tienen fecha mayor que la actuak
      return this.festividades.filter(fest => {
        const fecha = new Date(fest.fecha)

        //si se cumple (true) se añade al array, si es false pasa al siguiente
        return fecha > FechaActual
      })
    }
    

  }
})
