<template>
  <h1>USUARIOS TRAIDOS</h1>
  <ul>
    <li v-for="user in users">
      {{ user.name }}
    </li>
  </ul>
</template>

<script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue';

  const users = ref([])

  onMounted(()=>{
    cargarUsers()
  })

  const cargarUsers = async ()=>{
    try{
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users')
      
      users.value= respuesta.data
      console.log(users)

    }catch{

    }
  }

</script>
