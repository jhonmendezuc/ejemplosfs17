--RELACION DE UNO A MUCHOS-
--UN EQUIPO TIENE VARIOS JUGADORES Y VARIOS O MUCHOS JUGADORES PERTENECEN A UN EQUIPO
CREATE TABLE EQUIPO(
 idEquipo SERIAL PRIMARY KEY,
 nombreEquipo varchar(255) UNIQUE
);

CREATE TABLE JUGADOR(
 idJugador SERIAL PRIMARY KEY,
 nombreJugador varchar(255),
 edadJugador INT,
 posicionJugador varchar(20),
 idEquipo INT NOT NULL,
 FOREIGN KEY(idEquipo) REFERENCES EQUIPO(idEquipo)
);

--RELACION DE MUCHOS A MUCHOS

CREATE TABLE CIUDAD(
 idCiudad SERIAL PRIMARY KEY,
 nombreCiudad varchar(255)
);

CREATE TABLE PARTIDO(
 idPartido SERIAL PRIMARY KEY,
 marcadorPartido varchar(10),
 fechaPartido DATE
);

CREATE TABLE PARTIDO_ESTADIO(
idPartido INT NOT NULL,
idEstadio INT NOT NULL,
PRIMARY KEY (idPartido,idEstadio), -- LLAVE COMPUESTA
FOREIGN KEY(idPartido) REFERENCES PARTIDO(idPartido),
FOREIGN KEY(idEstadio) REFERENCES ESTADIO(idEstadio)
);

CREATE TABLE ESTADIO(
 idEstadio SERIAL PRIMARY KEY,
 nombreEstadio varchar(255),
 direccionEstadio varchar(255),
 capacidadEstadio INT,
 idCiudad INT NOT NULL,
 FOREIGN KEY(idCiudad) REFERENCES CIUDAD(idCiudad)
);


--RELACION DE UNO A UNO -- UN PARTIDO SOLO PUEDE TENER UN MARCADOR
CREATE TABLE MARCADOR(
  idMarcador SERIAL PRIMARY KEY,
  golesLocal INT,
  golesVisitante INT,
  tarjetasRojas INT,
  tarjetasAmarillas INT,
  idPartido INT UNIQUE, -- RELACION DE UNO A UNO
  FOREIGN KEY(idPartido) REFERENCES PARTIDO(idPartido)
)