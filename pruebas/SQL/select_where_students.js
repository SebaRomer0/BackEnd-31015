const options = require('./options/db')
const knex= require('knex')(options)

knex.from('students')
    .select(['id','name','age'])
    .where('age', '>','20')
    .orderBy('age','desc')

    .then( rows => {
        for ( const row of rows){
            console.log(`${row.id}: ${row.name}`);
        }
    })
    .catch(err => console.log(err))
    .finally(()=>knex.destroy())