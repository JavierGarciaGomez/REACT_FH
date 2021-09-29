// 323, 324, 327, 331, 338

const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

// Crear el servidor de express
const app = express();

// 331 DB Conexion
dbConnection();

// 338 CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// 327 lectura y parse del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth"));

// TODO: auth // crear, login, renew
// TODO: CRUD eventos

// app.get("/", (req, res) => {
//   res.send("hola");
// });

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo, en ${process.env.PORT}`);
});

console.log("hola mundo");
