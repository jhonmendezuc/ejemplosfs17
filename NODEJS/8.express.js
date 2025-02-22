import express from "express";
const app = express();
const port = 3000;

const estudiantes = [
  {
    nombre: "jhon",
    edad: 45,
  },
];

//midleware ruta not found
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada.......");
});

app.get("/estudiante", (req, res) => {
  res.json(estudiantes);
});

app.post("/estudiante", (req, res) => {
  res.send("crear estudiante");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
