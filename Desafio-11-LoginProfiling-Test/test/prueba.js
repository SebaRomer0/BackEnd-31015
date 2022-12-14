const fs = require('fs')


class TestProducto {

    constructor() {
        this.product = []
    }

    list() { return this.product }
    add(title) {
        this.product.push({title, complete: false})
    }

    complete(title) {
        if(this.product.length < 1) throw new Error ('No estan los Productos')

        let found = false
        this.product.forEach(producto => {
            if(producto.title === title) {
                producto.complete = true
                found = true
                return
            }
        })

        if(!found) throw new Error('Producto No se encontro')

        return true
    }

    saveToFilePromise() {
        let fileContets = ''
        this.product.forEach(producto => {
            fileContets += `${producto.title}, ${producto.complete}\n`
        })

        return fs.promises.writeFile('product.txt', fileContets)
    }

}

module.exports = TestProducto
