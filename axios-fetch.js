///////////////////////////////////////////////////////////////////
////////////////// AXIOS con async/await //////////////////////////
///////////////////////////////////////////////////////////////////
async function obtenerDatosConAxiosAsyncAwait() {
  try {
    // Realizamos una solicitud GET utilizando axios
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');

    console.log(respuesta.data);
    
  } catch (error) {
    // Manejamos cualquier error que ocurra
    console.error('Hubo un error:', error);
  }
}
obtenerDatosConAxiosAsyncAwait();

//////////////////////////////////////////////////////////
/////////// AXIOS con promesas (then, catch) ////////////
/////////////////////////////////////////////////////////
function obtenerDatosConAxios() {
  // Realizamos una solicitud GET utilizando axios
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => {
      console.log(respuesta.data);
    })
    .catch((error) => {
      // Manejamos cualquier error que ocurra
      console.error('Hubo un error:', error);
    });
}
obtenerDatosConAxios();

//////////////////////////////////////////////////////
////////////// FETCH con async/await /////////////////
//////////////////////////////////////////////////////
async function obtenerDatosConAsyncAwait() {
  try {
    // Realizamos una solicitud GET utilizando fetch
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Comprobamos si la respuesta fue exitosa
    if (!respuesta.ok) {
      throw new Error('Error en la respuesta de la API');
    }

    // Convertimos la respuesta en JSON
    const datos = await respuesta.json();
    
    // Mostramos los datos en la consola
    console.log('Datos obtenidos con async/await:', datos);
    
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}
obtenerDatosConAsyncAwait();
////////////////////////////////////////////////////////////
/////////////////  FETCH con .then() ///////////////////////
////////////////////////////////////////////////////////////
function obtenerDatosConThen() {
  // Realizamos una solicitud GET utilizando fetch
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((respuesta) => {
      // Comprobamos si la respuesta fue exitosa
      if (!respuesta.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      return respuesta.json();  // Convertimos la respuesta a JSON
    })
    .then((datos) => {
      // Recibimos la respuesta ya para trabajar
      console.log('Datos obtenidos con .then():', datos);
    })
    .catch((error) => {
      // Manejamos cualquier error que ocurra
      console.error('Hubo un error:', error);
    });
}

obtenerDatosConThen();

////////////////////////////////////////
//////// POST con AXIOS ///////////////
///////////////////////////////////////
const data = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

await axios.post('https://jsonplaceholder.typicode.com/posts', data, { //configuracion
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer tuTokenDeAcceso',
    },
    // ...
});

////////////////////////////////////////
//////// POST con FETCH ///////////////
///////////////////////////////////////
const datosAEnviar = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  // Establecemos el tipo de contenido
    },
    body: JSON.stringify(datosAEnviar),  // Convertimos los datos a JSON
})

