const Contenedor = require("../model/contenedor.model");
const { serviceSave, serviceGetData } = require("../service/service");


const db = new Contenedor('db.json')

const controlMensajeProdPost = (req, res) => {
  db.serviceSave(req.body)
};

const controlMensajeProdGet = (req, res) => {
  serviceGetData();
};

module.exports = { controlMensajeProdGet, controlMensajeProdPost };
