"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroeByIdAsync = void 0;
var _08_imp_exp_1 = require("./08-imp-exp");
var getHeroeByIdAsync = function (id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var p1 = (0, _08_imp_exp_1.getHeroeById)(id);
            if (p1) {
                resolve(p1);
            }
            else {
                reject("No se pudo encontrar el héroe " + id);
            }
        }, 1000);
    });
};
exports.getHeroeByIdAsync = getHeroeByIdAsync;
