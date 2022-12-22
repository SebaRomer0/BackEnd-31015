const express = require("express");
const { Router } = express;
const {
  controlMensajeProdGet,
  controlMensajeProdPost,
} = require("../services/service.form");


const bookRouter = new Router();

const product = [
  { id: "1", nombre: "Escuadra", precio: "223 $", foto: "./img/Escuadra.png" },
  {
    id: "2",
    nombre: "Calculadora",
    precio: "550 $",
    foto: "./img/Calculadora.png",
  },
  { id: "3", nombre: "Agenda", precio: "150 $", foto: "./img/Agenda.png" },
];

bookRouter.get("/formulario", (req, res) => {
  req.session.usuario = req.query;

  const mensaje = req.session.usuario;

  res.render("producto", { product, mensaje });
});


bookRouter.post("/mensajes", controlMensajeProdPost) 

bookRouter.get("/mensajes", controlMensajeProdGet)


bookRouter.get("/logout", (req, res) => {
  res.render("fin-de-sesion");
});

module.exports = bookRouter;