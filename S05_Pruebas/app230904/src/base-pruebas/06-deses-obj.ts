export const usContext = ({
  clave,
  nombre,
  edad,
  rango = "Capitán",
}: {
  clave: string;
  nombre: string;
  edad: number;
  rango?: string;
}) => {
  return {
    nombre,
    rango,
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};
