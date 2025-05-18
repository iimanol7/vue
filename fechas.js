// Trabajo completo con fechas en JavaScript

// 1. CREACIÓN DE FECHAS

// Fecha actual
const fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

// Fecha con parámetros (año, mes, día, horas, minutos, segundos, milisegundos)
const fechaEspecifica = new Date(2023, 4, 15, 10, 30, 0, 0); // mes 4 = mayo (los meses van de 0 a 11)
console.log("Fecha específica:", fechaEspecifica);

// Desde string
const fechaDesdeString = new Date("2023-12-25T15:00:00Z");
console.log("Fecha desde string:", fechaDesdeString);

// 2. OBTENER ATRIBUTOS DE UNA FECHA
console.log("Año:", fechaActual.getFullYear());
console.log("Mes:", fechaActual.getMonth()); // 0 = enero
console.log("Día del mes:", fechaActual.getDate());
console.log("Día de la semana:", fechaActual.getDay()); // 0 = domingo
console.log("Horas:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());
console.log("Milisegundos:", fechaActual.getMilliseconds());
console.log("Timestamp:", fechaActual.getTime());

// 3. MODIFICAR FECHAS
const modificada = new Date(fechaActual);
modificada.setFullYear(2030);
modificada.setMonth(11); // diciembre
modificada.setDate(31);
modificada.setHours(23);
modificada.setMinutes(59);
modificada.setSeconds(59);
modificada.setMilliseconds(999);
console.log("Fecha modificada:", modificada);

// 4. FORMATO LOCALIZADO
console.log("toLocaleString:", fechaActual.toLocaleString());
console.log("toLocaleDateString:", fechaActual.toLocaleDateString());
console.log("toLocaleTimeString:", fechaActual.toLocaleTimeString());

// 5. COMPARACIÓN DE FECHAS
const f1 = new Date("2023-01-01");
const f2 = new Date("2024-01-01");

console.log("f1 < f2:", f1 < f2); // true
console.log("f1.getTime() === f2.getTime():", f1.getTime() === f2.getTime());
console.log("Diferencia en milisegundos:", f2 - f1);
console.log("Diferencia en días:", (f2 - f1) / (1000 * 60 * 60 * 24));

// 6. MÉTODOS ESTÁTICOS
console.log("Date.now():", Date.now()); // timestamp actual
console.log("Date.parse('2025-05-01'):", Date.parse("2025-05-01"));

// 7. CONVERTIR A ISO Y UTC
console.log("toISOString:", fechaActual.toISOString());
console.log("toUTCString:", fechaActual.toUTCString());

// 8. DIFERENCIA ENTRE FECHAS
const inicio = new Date("2025-05-01T00:00:00");
const fin = new Date("2025-05-18T12:30:00");
const diferenciaMS = fin - inicio;

const dias = Math.floor(diferenciaMS / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenciaMS / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferenciaMS / (1000 * 60)) % 60);
console.log(`Diferencia: ${dias} días, ${horas} horas, ${minutos} minutos`);

// 9. FECHAS INTERNACIONALES CON Intl.DateTimeFormat
const formatoIntl = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/Paris",
});
console.log("Formato Intl:", formatoIntl.format(fechaActual));
