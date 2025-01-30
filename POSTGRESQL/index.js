const cliente = require("./db.js");

async function pruebaQuery() {
  const respuesta = await cliente.query(`
SELECT E.NOMBREESTADIO, C.NOMBRECIUDAD, P.FECHAPARTIDO, P.MARCADORPARTIDO  
FROM   PARTIDO P,
       PARTIDO_ESTADIO PE,
       ESTADIO E,
       CIUDAD C
WHERE  P.IDPARTIDO = PE.IDPARTIDO AND
       E.IDESTADIO = PE.IDESTADIO AND
       C.IDCIUDAD = E.IDCIUDAD
    `);
  console.log("equipos", respuesta);
}

pruebaQuery();
