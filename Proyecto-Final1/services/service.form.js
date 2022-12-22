// const Contenedor = require("../model/contenedor.model");

const ProductoApi = require("../api/productoApi");

// const db = new Contenedor('db.json')
const productoAPI = new ProductoApi('db.json')




const controlMensajeProdPost = (req, res) => {
  productoAPI.save(req.body)
  // db.save(req.body)
        .then(() => res.redirect('/api/producto'))
        .catch(e => {
            console.log(e);
            res.send('Error al Guardar')  
        })
}

const controlMensajeProdGet = (req, res) => {
  productoAPI.getData()
  // db.getData()
    .then( data => res.render('centro-mensajes', { data } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
}

module.exports = { controlMensajeProdGet, controlMensajeProdPost };
