// 329, 330

// 330
const express = require("express");

// 330 Create express server
const app = express();

// 330 routes
app.get("/", (req, res) => {
  console.log("se requirió /");
});

// 330
app.listen(4000, () => {
  console.log("Server running");
});
console.log("Hola, mundo");
