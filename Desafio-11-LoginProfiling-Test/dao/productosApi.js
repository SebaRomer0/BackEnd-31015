const ProductoDao = require('./productosDao')

class ProductoApi {

    constructor(filename){
        this.productoDAO = new ProductoDao(filename)
    }

    async save(obj){
        const productoSave = await this.productoDAO.save(obj)

        return productoSave
    }

    async getData(){
        const productoGetData = await this.productoDAO.getData()

        return productoGetData
    }

}

module.exports = ProductoApi
