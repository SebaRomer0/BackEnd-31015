const db = require('./BD/db')

// Aca se crea la tabla en SQL
db.schema.createTable('products', table => {
    // Configuracion de las columnas de la tabla
    table.increments('id')
    table.string('title')
    table.float('price')
    table.string('foto')
})
    .then(()=> console.log('tabla de productos creada'))
    .catch(err => {console.log(err); throw err})
    .finally(()=> {
        knex.destroy()
    })