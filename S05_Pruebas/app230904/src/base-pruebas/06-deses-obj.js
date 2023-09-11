"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usContext = void 0;
var usContext = function (_a) {
    var clave = _a.clave, nombre = _a.nombre, edad = _a.edad, _b = _a.rango, rango = _b === void 0 ? "Capitán" : _b;
    return {
        nombre: nombre,
        rango: rango,
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232,
        },
    };
};
exports.usContext = usContext;
