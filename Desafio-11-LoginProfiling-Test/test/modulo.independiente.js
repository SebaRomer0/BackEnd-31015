const axios = require('axios')

function getProductos() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
}

function postProductos() {
    return axios.post('https://jsonplaceholder.typicode.com/posts')
}

function putProductos() {
    return axios.put('https://jsonplaceholder.typicode.com/posts')
}

function deleteProductos() {
    return axios.delete('https://jsonplaceholder.typicode.com/posts')
}

Promise.all([getProductos(), postProductos(),putProductos(),deleteProductos()])
    .then(function(results) {
        console.log(results);
    })


