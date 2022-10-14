const productos = [
    {id:1, nombre:"Pepe",precio:100},
    {id:2, nombre:"Juan",precio:200},
    {id:3, nombre:"Tato",precio:300},
    {id:4, nombre:"Chino",precio:400},
    {id:5, nombre:"Julio",precio:500},
    {id:6, nombre:"Seba",precio:600}
]

const nombre1 = []
for (const product of productos) {
    nombre1.push(product.nombre)
}

console.log(nombre1);

// Segunda forma de hacerlo
const nombre2 = productos.map(p => p.nombre)
console.log(nombre2);

// Precio total
const precioTotal = productos.reduce((a,element) => a += element.precio, 0)
console.log(precioTotal);

// Precio Promedio
const promedio = productos.reduce((a,element) => a += element.precio,0)/productos.length

console.log(promedio);


