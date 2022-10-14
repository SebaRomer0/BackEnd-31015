class Usuario {
  constructor(nombre, apellido,nombreMascosta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreMascosta = nombreMascosta;
    this.libros = [];
    this.mascotas = [];
  }

  // Contador para la cantidad de las mascotas
  static conteoMascotas = 0;

  getFullName() {
    console.log(`Mi nombre es ${this.nombre} y mi apellido es ${this.apellido} `);
  }

  addMascota(){
    console.log(`El nombre de la mascota es ${this.nombreMascosta}`);
    Usuario.conteoMascotas++
    this.mascotas.push(this.nombreMascosta)
  }

  countMascotas(){
    console.log(`La cantidad de mascotas registradas son ${Usuario.conteoMascotas}`);
  }
  
  addBook(nom,aut){
    this.libros.push({nombrelibro:nom,nombreAutor:aut});
    // Por si se quiere mostrar el Array
    // console.log(this.libros);
    
  }
  
  getBookNames(){
    const baseLibros = [];
    for(const libro of this.libros){
      baseLibros.push(libro.nombrelibro)
    }
    console.log(baseLibros);
  }
  
}

const usuario1 = new Usuario(
  "Gabriel",
   "Romero",
   "Pepe",
);

console.log(usuario1.getFullName());
console.log(usuario1.addMascota());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
usuario1.addBook("El Alquimista","Pablo coelho");
usuario1.getBookNames();
