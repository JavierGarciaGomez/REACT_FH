"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarioActivo = exports.getUser = void 0;
var getUser = function () { return ({
    uid: "ABC123",
    username: "El_Papi1502",
}); };
exports.getUser = getUser;
// Tarea
var getUsuarioActivo = function (nombre) { return ({
    uid: "ABC567",
    username: nombre,
}); };
exports.getUsuarioActivo = getUsuarioActivo;
