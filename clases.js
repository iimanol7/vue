
export default class Persona {
    
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  // Getter para nombre
  get nombre() {
    return this._nombre;
  }

  // Setter para nombre
  set nombre(nuevoNombre) {
    if (typeof nuevoNombre === 'string' && nuevoNombre.length > 0) {
      this._nombre = nuevoNombre;
    } else {
      throw new Error("Nombre inválido");
    }
  }

  // Getter para edad
  get edad() {
    return this._edad;
  }

  // Setter para edad
  set edad(nuevaEdad) {
    if (typeof nuevaEdad === 'number' && nuevaEdad >= 0) {
      this._edad = nuevaEdad;
    } else {
      throw new Error("Edad inválida");
    }
  }

  saludar() {
    console.log(`Hola, me llamo ${this._nombre} y tengo ${this._edad} años.`);
  }

  static esMayorDeEdad(edad) {
    return edad >= 18;
  }
}

/////// 2. USO DE LA CLASE /////////////////////////////////////////////////////////
import Persona from 'clases.js'

// Crear una instancia
const persona1 = new Persona("Juan", 25);
persona1.saludar(); // Hola, me llamo Juan y tengo 25 años.

// Acceder a atributos con getters
console.log("Nombre:", persona1.nombre);
console.log("Edad:", persona1.edad);

// Modificar atributos con setters
persona1.nombre = "Carlos";
persona1.edad = 30;
persona1.saludar(); // Hola, me llamo Carlos y tengo 30 años.

// Probar setter con valor inválido (lanza error)
try {
  persona1.edad = -5;
} catch (e) {
  console.error("Error al asignar edad:", e.message);
}

// Usar método estático
console.log("¿20 es mayor de edad?:", Persona.esMayorDeEdad(20));
console.log("¿15 es mayor de edad?:", Persona.esMayorDeEdad(15));

// 3. HERENCIA
class Empleado extends Persona {
  constructor(nombre, edad, salario) {
    super(nombre, edad);
    this.salario = salario;
  }

  // Sobrescribir método
  saludar() {
    console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y gano $${this.salario}.`);
  }

  // Método propio
  aumentarSalario(porcentaje) {
    this.salario += this.salario * (porcentaje / 100);
  }
}

// Crear instancia de clase hija
const empleado1 = new Empleado("Laura", 28, 2000);
empleado1.saludar(); // Hola, soy Laura, tengo 28 años y gano $2000.

// Aumentar salario
empleado1.aumentarSalario(10);
console.log("Nuevo salario:", empleado1.salario);
