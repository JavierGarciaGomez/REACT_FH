import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import heroes from "./data/heros";

// 13 var y consts
const nombre = "Javier";
console.log(nombre);

// 16 arrays
let array1 = [1, 2, 3, 4];
let array2 = [...array1, 5];
console.log(array1);
console.log(array2);

array2 = array1.map(function (num) {
  return num * 2;
});

array2 = array1.map((num) => {
  return num * 2;
});

console.log(array2);

// Functions
const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar("Javier"));

const getActiveUser = (nombre) => ({
  uid: "abc",
  nombre,
});

const activeUser = getActiveUser("Jorge");
console.log(activeUser);

// 18 Desestructuracion
// 19 Desustructuración de arreglos

const personajes = ["Goku", " Vegeta", "Trunks"];
const [per1, , per3] = personajes;
console.log(per3);

const useSt = (valor) => {
  return [
    valor,
    () => {
      console.log("Función");
    },
  ];
};

// 20 import, export funciones comunes de arreglos

console.log(heroes);
const getHeroById = (id) => heroes.find((hero) => hero.id === id);
console.log(getHeroById(2));

const DCHeros = heroes.filter((hero) => hero.owner === "DC");
console.log(DCHeros);

// 22 Promises
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroById(4);
    console.log("heroe en promesa", hero);
    console.log("2 segundos después");
    resolve(hero);
  }, 2000);
});

promesa.then((hero) => {
  console.log("then the la promesa", hero);
});

const getHeroByIdAsync = (id, timeOut) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject("hero not found");
      }
    }, timeOut);
  });
};

getHeroByIdAsync(7)
  .then((hero) => {
    console.log("resolve promise", hero);
  })
  .catch((error) => console.log(error));

// 23 Fetch
const giphy_API = "F9WWU8akMmyFfMy0lf9IkZU5ZbCglLUJ";

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${giphy_API}`
);

request.then((resp) =>
  resp.json().then((data) => {
    console.log(data);
    const img_url = data.data.images.original.url;
    const img = document.createElement("img");
    img.src = img_url;
    document.body.append(img);
  })
);

// 24 async await
const getImage = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${giphy_API}`
  );
  const data = await response.json();

  const img_url = data.data.images.original.url;
  const img = document.createElement("img");
  img.src = img_url;
  document.body.append(img);
};

getImage().then(console.log);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
