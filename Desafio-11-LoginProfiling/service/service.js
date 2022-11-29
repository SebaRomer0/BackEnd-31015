const Contenedor = require("../model/contenedor.model");
const bd = new Contenedor("db.json");

const serviceSave = (req, res) => {
  bd.save(req.body)
    .then(() => res.redirect("/api/producto"))
    .catch((e) => {
      console.log(e);
      res.send("Error al Guardar");
    });
};

const serviceGetData = (req, res) => {
  bd.getData()
    .then((data) => res.render("centro-mensajes", { data }))
    .catch((e) => {
      console.log(e);
      // res.send('<h1>No se pudo cargar los Productos</h1>')
    });
};

module.exports = { serviceSave, serviceGetData };
