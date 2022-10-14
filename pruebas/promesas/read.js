const fs = require('fs')

const myPromise = fs.promises.readFile('data.txt', 'utf-8')

myPromise.then( contenido => {
    console.log(contenido);
} )

myPromise.catch(error => {
    console.log('hubo un error leyendo');
})

fs.promises.readFile('data.txt', 'utf-8')
    .then( c => console.log(c) )
    .catch( e => console.log('Hubo un Error') )