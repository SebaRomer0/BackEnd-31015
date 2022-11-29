const { serviceSave, serviceGetData } = require("../service/service");

const controlMensajeProdPost = (req, res) => {
  serviceSave();
};

const controlMensajeProdGet = (req, res) => {
  serviceGetData();
};

module.exports = { controlMensajeProdGet, controlMensajeProdPost };
