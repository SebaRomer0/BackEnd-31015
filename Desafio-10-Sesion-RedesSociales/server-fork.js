const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer();
const { fork } = require("child_process");
const { query } = require("express");
require("dotenv").config();

// -----------------Consigna 1 -----------------

const conexion = process.env.DB_CONNECTION;
const host = process.env.DB_HOST;
const puerto = process.env.DB_PORT;
const dataBase = process.env.DB_DATABASES;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log(conexion, host, puerto, dataBase, userName, password);

// -----------------Consigna 2 -----------------

app.get("/info", (req, res) => {
  res.send("<h1>Ver en la consola las respuestas</h1>");

  // Argumentos de Entrada
  console.log("El argumento de entrada es:", process.title);

  // Nombre de la Plataforma(Sistema Operativo)
  console.log("El sistema Operativo es ", process.platform);

  // Version Node
  console.log("La version de Node es ", process.version);

  // Uso de la memoria
  console.log("El USo de Memoria", process.memoryUsage());

  // Path de Ejecucion
  console.log("El Path de Ejecucion es ", process.execPath);

  // Proceso ID
  console.log("ID del proceso:", process.pid);

  // Carpeta de Proyecto
  console.log("Directorio actual:", process.cwd());
});

// -----------------Consigna 3 -----------------

const calculo = Math.random();

server.on("request", (req, res) => {
  const { url } = req;

  if (url == "/api/random") {
    // Ingrese por URL un valor a Cant...Ejemplo "api/random?cant=10000"
    const cant = Number(req.query);

    const serverFork = fork("./calculo.js");
    serverFork.send("Start");
    serverFork.on("Mensaje", (sum) => {
      return res.end("El resultado es " + resultado);
    });
  } else {
    const resultado = calculo * 100000000;

    return res.end("El resultado es " + resultado);
  }
});

server.listen(8080, (err) => {
  if (err) throw new Error(err);
  console.log("Server Escuchando...");
});
