// REGEX

// -Todo lo que vaya fuera de corchetes es obligatorio. '@', \. etc.

// -todo lo que vaya dentro de corchetes [] se debe cumplir mínimo uno de esos, no necesariamente todos.

// -con {} + * ? especificas el largo máximo y mínimo de la cadena que se especifica detrás suya.

// -con ^ y $ se especifica que TODA la cadena debe de cumplir, no solo un trozo

// -{n} -> largo exacto
// -{n, m} -> mínimo y máximo
// -{n,} -> mínimo y lo que sea
// -+ -> uno o mas
// -* -> 0 o mas
// -? -> 0 o 1

// -\s -> espacios en blanco
// -\d -> cualquier digito/numero
// -\w -> cualquier letra, digito y _
// . -> cualquier caracter menos salto de línea

// -(?=.*[caract]) -> comprueba que mínimo haya algún caracter



// Expresión regular para validar un correo electrónico
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// Expresión regular para validar una contraseña (mínimo 8 caracteres, una mayúscula, una minúscula, 
// un número y un carácter especial)
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
// Expresión regular para validar un nombre de usuario (letras, números y guion alto)
const usernameRegex = /^[a-zA-Z0-9-_]+$/;

// Ejemplos de validación
const testEmailValid = "usuario@dominio.com";
const testEmailInvalid = "usuario@dominio";  // Correo sin dominio válido

const testPasswordValid = "Contraseña123!";
const testPasswordInvalid = "contraseña";  // Contraseña sin mayúscula, número ni carácter especial

const testUsernameValid = "usuario_123";
const testUsernameInvalid = "usuario@123";  // Nombre de usuario con carácter no permitido (@)

// Pruebas y resultados para el correo electrónico
console.log(emailRegex.test(testEmailValid));  // true
console.log(emailRegex.test(testEmailInvalid));  // false

// Pruebas y resultados para la contraseña
console.log(passwordRegex.test(testPasswordValid));  // true
console.log(passwordRegex.test(testPasswordInvalid));  // false

// Pruebas y resultados para el nombre de usuario
console.log(usernameRegex.test(testUsernameValid));  // true
console.log(usernameRegex.test(testUsernameInvalid));  // false
