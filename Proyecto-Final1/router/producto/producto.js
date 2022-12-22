const express = require("express");
const bodyParser = require("body-parser");
const { Router } = express;
const routerProducto = new Router();


const product = [
  {
    id: 1,
    nombre: "camisa-1",
    descripcion: "Camisa de estacion Floreada",
    codigo: 101001,
    foto: "./img/camisa1.jpeg",
    precio: 1200,
    stock: 3,
  },
  {
    id: 2,
    nombre: "camisa-2",
    descripcion: "Camisa de estacion Black/White",
    codigo: 101002,
    foto: "./img/camisa2.jpeg",
    precio: 1500,
    stock: 2,
  },
  {
    id: 3,
    nombre: "camisa-3",
    descripcion: "Camisa Ocacional Neutra",
    codigo: 101003,
    foto: "./img/camisa3.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 4,
    nombre: "pantalon-1",
    descripcion: "Pantalon color Mostaza Green",
    codigo: 101004,
    foto: "./img/pantalon1.jpg",
    precio: 7000,
    stock: 5,
  },
  {
    id: 5,
    nombre: "pantalon-2",
    descripcion: "Pantalon Neutr",
    codigo: 101005,
    foto: "./img/pantalon2.jpg",
    precio: 4000,
    stock: 6,
  },
  {
    id: 6,
    nombre: "pantalon-3",
    descripcion: "Pantalon desteñido Black/White",
    codigo: 101006,
    foto: "./img/pantalon3.jpg",
    precio: 10.0,
    stock: 3,
  },
  {
    id: 7,
    nombre: "remera-1",
    descripcion: "Remera Expire Stampa",
    codigo: 101007,
    foto: "./img/remera1.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 8,
    nombre: "remera-2",
    descripcion: "Remera Salmon",
    codigo: 101008,
    foto: "./img/remera2.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 9,
    nombre: "remera-3",
    descripcion: "Remera Ocacional Black",
    codigo: 101009,
    foto: "./img/remera3.jpeg",
    precio: 1000,
    stock: 5,
  },
];

routerProducto.get("api/carrito", (req, res) => {
  res.send(product);
});

routerProducto.post("api/pay", (req, res) => {
  console.log(req.body);
  res.send(product);
});

routerProducto.use("/producto", express.static("services"));

module.exports = routerProducto;
