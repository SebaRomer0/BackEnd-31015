const Contenedor = require('./contenedor');

const contenedor = new Contenedor('productos.json')

await console.log(contenedor.init())

console.log(contenedor.save({titulo:"Rock and Roll"}))
console.log(contenedor.save({titulo:"PePe"}))
console.log(contenedor.getAll())
console.log(contenedor.getById(2));
