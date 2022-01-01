// 329, 330, 331 public directory .env, 332 users routes, 334 read and parsing body, 338 db conn

// 330
const express = require("express");
const path = require("path");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

console.log(process.env);

// 330 Create express server
const app = express();

// 338 db connection
dbConnection();

// 345 CORS
app.use(cors());

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
// 350 events routes
app.use("/api/events", require("./routes/events"));

// 330
app.listen(process.env.PORT, () => {
  console.log("Server running");
});
console.log("Hola, mundo");
