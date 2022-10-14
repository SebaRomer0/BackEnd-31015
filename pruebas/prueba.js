// c=[1,2,3]

// f = c.push(4)

// console.log(c);

// // ejecucion de una funciona anonima
// (function() {
//     console.log("Init");
// })() 


//  Clase 3

// class cliente {
//     constructor(nombre,edad,direccion){
//         this.nombre = nombre
//         this.edad = edad
//         this.direccion = direccion
//     }

//     saludo(){
//         console.log(`Buenas Nocches ${this.nombre} y tenes ${this.edad} años, y vivis en ${this.direccion}`);
//     }

// }

// const c1 = new cliente("Pepe", 30 , "Buenos Aires 5341")

// c1.saludo()

// function dividir (dividendo,divisor){

//     return new Promise( (resolve, reject) =>{
//         if (divisor == 0){
//             reject('No se pudo completar la operacion')
//         } else {
//             resolve(dividendo / divisor)
//         }

//     })
// }

// // Promesas

// const promesa = dividir(10,0)
// promesa
//     .then( resultado => console.log(`el resultado es ${resultado}`))
//     .catch( error => console.log(`HUbo un error que dice : `, error))

// console.log(promesa);



// -----------------Archivo--------------------

// console.log('Inicio');

// setTimeout(()=>{
//     console.log('Se acabo el tiempo');
// }, 3000)

// console.log('FIN');

// ------ Cuando se Lee un Archivo
const fs = require('fs')

const data = fs.readFileSync('./data.txt', 'utf-8')

console.log(data);

// -------- Crear Archivo
fs.writeFileSync('.new.txt', 'Saludos Seba vamos Excelente')

//----- Agregar contenido al Archivo
fs.appendFileSync('./.new.txt', 'Se agrego este contenido \n')

// //---------- Borrar Archivo
fs.unlinkSync('./.new.txt')

//------- Control de Errores

try {
    const data = fs.readFileSync('./.new.txt')
} catch (err) {
    console.log('Aparecio un Error');
    console.error(err)
}

console.log('El show continua');
