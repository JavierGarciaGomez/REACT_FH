"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroesByOwner = exports.getHeroeById = void 0;
var heroes_1 = require("../data/heroes");
var getHeroeById = function (id) {
    return heroes_1.default.find(function (heroe) { return heroe.id === id; });
};
exports.getHeroeById = getHeroeById;
var getHeroesByOwner = function (owner) {
    return heroes_1.default.filter(function (heroe) { return heroe.owner === owner; });
};
exports.getHeroesByOwner = getHeroesByOwner;
