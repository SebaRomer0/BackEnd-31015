const fs = require('fs')

class Contenedor {

    constructor(filename) {
        this.filename = filename
        this.productos = []
        this.nextID = 1
    }

    async init(){
        try {
            const data = await this.readFile()
            if (data.length > 0) {
                this.productos = data
                this.nextID = this.productos[data.length-1].id + 1
                console.log('Los datos fueron Cargados');
                // Para ver si se cargo los productos.json
                // console.log(data); 
            }
        } catch (e) {
            console.log('No se pudo leer los Archivos')
        }
    }

    async save(obj) {
        obj.id = this.nextID
        this.productos.push(obj)
        this.nextID++

        try{
            await this.saveFile()
        }catch (e) {
            console.log(e)
        }
    }
 
    getAll() {
        return this.productos
    }

    saveFile() {
        return fs.writeFile(this.filename, JSON.stringify(this.productos))
    }

    getById(id) {
        const data = this.productos.find(p => p.id == id)

        return data ? data : null
    }

    async deleteById(id) {
        const idx = this.productos.findIndex(p => p.id == id)
        this.productos.splice(idx,1)

        try{
            await this.saveFile()
        }catch(e) {
            console.log(e);
        }
    }

    readFile(){
        return fs.promises.readFile(this.filename,'utf-8')
            .then(data => JSON.parse(data))
    }

}

module.exports = Contenedor