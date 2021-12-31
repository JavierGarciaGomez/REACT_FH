// 329, 330, 331 public directory .env, 332 users routes, 334 read and parsing body

// 330
const express = require("express");
const path = require("path");
require("dotenv").config();

console.log(process.env);

// 330 Create express server
const app = express();

// 331 public directory
app.use(express.static(path.join(__dirname, "/public")));

// 334 reading and parsing
app.use(express.json());

// 330 routes
// app.get("/", (req, res) => {
//   console.log("se requirió /");
//   res.json({ ok: true });
// });

// 332 users routes
app.use("/api/auth", require("./routes/auth"));
// 332 TODO: auth (create, login, renew)... Events CRUD

// 330
app.listen(process.env.PORT, () => {
  console.log("Server running");
});
console.log("Hola, mundo");
