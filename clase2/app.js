class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }

    countMascotas(){
        console.log(`El número de mascotas es ${this.mascotas.length}`);
    }

    addBook(autor, nombre){
        this.libros.push({autor, nombre});
        console.log(this.libros);
    }

    getBookNames(){
      console.log(this.libros.map(libro => libro.nombre));
    }
}

const User = new Usuario ("Diego", "Rios", [{autor: "Robert K", nombre: "Padre Rico, Padre Pobre"},{autor: "Robert K", nombre: "El cuadrante del flujo de dinero"}], ["pato", "uma"]);

User.getFullName();
User.addMascota("gato");
User.addBook("Paulo Cohelo", "El alquimista");
User.getBookNames();
User.countMascotas();