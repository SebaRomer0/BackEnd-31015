const options = require('./options/db')
const knex= require('knex')(options)

// Muestra los componentes de una tabla. un Filtro

knex.from('students').select('*')
    .then(rows => {
        for ( const row of rows){
            console.log(`${row ['id']}: ${row['name']} ${row['age']}`)
        }
    }).catch(err => console.log(err))
    .finally(() => knex.destroy())

    