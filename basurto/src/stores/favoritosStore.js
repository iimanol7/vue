import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFavoritosStore = defineStore('favoritos', {
  state: () => ({

    favoritos:[],
    numeroFavoritos: 0

  }),


  actions : {

    añadirFavoritos(servicio){
      this.favoritos.push(servicio)

      this.numeroFavoritos++

      console.log(this.favoritos)
    },

    eliminarFavoritos(servicio){
      //buscamos el servicio en el array de favoritos
      const index = this.favoritos.findIndex(f=> f.SERVICIO === servicio.SERVICIO)
      //lo eliminamos
      this.favoritos.splice(index, 1)
      //restamos 1 al contador
      this.numeroFavoritos--
      
      console.log(this.favoritos)
    }

  },

  getters : {
    
    

  }
})
