import express, { json } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

//midleware: transforma el body(json) a js
app.use(json());

//midleware: responde a rutas de usuarios
app.use("/user", userRouter);
app.use("/task", taskRouter);

//midleware: responde a rutas no encontradas
app.use((req, res) => {
  res.status(404).send("❌ recurso no encontrado");
});

app.listen(PORT, () => {
  console.log(`✅ servidor funcionando en el puerto ${PORT}...`);
});
