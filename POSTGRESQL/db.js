const { Client } = require("pg");

const cliente = new Client({
  user: "neondb_owner",
  password: "npg_A4eqvbE2xosc",
  host: "ep-silent-hat-a4rx0wzg-pooler.us-east-1.aws.neon.tech",
  port: 5432,
  database: "torneo",
  ssl: {
    rejectUnauthorized: false,
  },
});
/*
const cliente = new Client({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: 5432,
  database: "postgres",
}); */

cliente.connect(async (err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = cliente;
