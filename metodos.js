// Métodos más usados de arrays en JavaScript con ejemplos y explicaciones

const numeros = [1, 2, 3, 4, 5, 6];
const personas = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 25 },
  { nombre: "Juan", edad: 17 },
  { nombre: "Marta", edad: 30 },
];

// 1. filter(): crea un nuevo array con los elementos que cumplen una condición
const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log("Mayores de edad:", mayoresDeEdad);

// 2. map(): transforma cada elemento y devuelve un nuevo array
const nombres = personas.map(p => p.nombre);
console.log("Nombres:", nombres);

// 3. reduce(): reduce el array a un único valor (acumulador)
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log("Suma total:", suma);

// 4. findIndex(): devuelve el índice del primer elemento que cumple una condición
const indiceMayorDe25 = personas.findIndex(p => p.edad > 25);
console.log("Índice primera persona con edad > 25:", indiceMayorDe25);

// 5. find(): devuelve el primer elemento que cumple una condición
const primerMenor = personas.find(p => p.edad < 18);
console.log("Primer menor de edad:", primerMenor);

// 6. forEach(): ejecuta una función por cada elemento (no retorna nada)
console.log("Nombres con forEach:");
personas.forEach(p => console.log(p.nombre));

// 7. some(): retorna true si al menos un elemento cumple la condición
const hayMenores = personas.some(p => p.edad < 18);
console.log("¿Hay menores?:", hayMenores);

// 8. every(): retorna true si todos los elementos cumplen la condición
const todosMayores = personas.every(p => p.edad >= 18);
console.log("¿Todos son mayores de edad?:", todosMayores);

// 9. sort(): ordena los elementos (puede modificar el array original)
const numerosOrdenados = [...numeros].sort((a, b) => b - a);
console.log("Números ordenados descendente:", numerosOrdenados);

// 10. includes(): comprueba si un valor existe en el array o string
console.log("¿Incluye el número 3?:", numeros.includes(3));


// 11. indexOf(): devuelve el índice de la primera ocurrencia (o -1 si no está)
console.log("Índice del número 4:", numeros.indexOf(4));

// 12. slice(): devuelve una copia parcial del array (sin modificar el original)
const primerosTres = numeros.slice(0, 3);
console.log("Primeros 3 elementos:", primerosTres);

// 13. splice(): modifica el array (añade, elimina o reemplaza elementos)
const copia = [...numeros];
const copia2 = [...numeros];

copia2.splice(2, 1); // desde el indice 2 elimina 1 elemento
console.log("Eliminados dos elementos desde índice 1:", copia2);

copia.splice(2, 1, 99); // desde índice 2, elimina 1 elemento y agrega 99
console.log("Array con splice:", copia);


// 14. concat(): une arrays y devuelve uno nuevo
const combinados = numeros.concat([7, 8, 9]);
console.log("Array combinado:", combinados);

// 15. flat(): aplana un array de arrays anidados
const anidado = [1, 2, [3, 4], [5, [6, 7]]];
console.log("Array plano (nivel 1):", anidado.flat());
console.log("Array plano (nivel 2):", anidado.flat(2));



// buscar una coincidencia en una cadena de texto:
const resultados = personas.filter(u => u.nombre.toLowerCase().includes("jua"));
console.log(resultados);
// al estar iterando sobre una cadena de texto y no sobre un array, el includes detecta 
// si la cadena contiene en vez de buscar exactamente ese valor
