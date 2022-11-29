const express = require("express");
const { Router } = express;
const {
  controlMensajeProdGet,
  controlMensajeProdPost,
} = require("../controller/controller");

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

bookRouter.get("/producto", (req, res) => {
  req.session.usuario = req.query;

  const mensaje = req.session.usuario;

  res.render("producto", { product, mensaje });
});

bookRouter.post("/mensajes", (req, res) => {
  controlMensajeProdPost();
});

bookRouter.get("/mensajes", (req, res) => {
  controlMensajeProdGet();
});

bookRouter.get("/logout", (req, res) => {
  res.render("fin-de-sesion");
});

module.exports = bookRouter;
