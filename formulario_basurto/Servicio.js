// Servicio.js
export default class Servicio {
    // Constructor que recibe servicio, pabellón (como índice) y visible
    constructor(servicio, pabellon, mostrar) {
        this.servicio = servicio;
        this.pabellon = pabellon;
        this.mostrar = mostrar;
    }

    // Getters y setters
    getServicio() {
        return this.servicio;
    }

    setServicio(servicio) {
        this.servicio = servicio;
    }

    getPabellon() {
        return this.pabellon;
    }

    setPabellon(pabellon) {
        this.pabellon = pabellon;
    }

    getMostrar() {
        return this.mostrar;
    }

    setMostrar(mostrar) {
        this.mostrar = mostrar;
    }

    // Método mostrar() devuelve la línea con la información del servicio
    mostrarr() {
        const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];
        const pabellonNombre = pabellones[this.pabellon];
        const estado = this.mostrar ? "Visible" : "No visible";
        return `${this.servicio} – ${this.pabellon + 1}: ${pabellonNombre} – ${estado}`;
    }
}

