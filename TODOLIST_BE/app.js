import express, { json } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/task", (req, res) => {
  res.send("consulta de tareas");
});

//midleware: transforma el body(json) a js
app.use(json());

//midleware: responde a rutas de usuarios
app.use("/user", userRouter);

//midleware: responde a rutas no encontradas
app.use((req, res) => {
  res.status(404).send("❌ recurso no encontrado");
});

app.listen(PORT, () => {
  console.log(`✅ servidor funcionando en el puerto ${PORT}...`);
});
