import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateToken = (req, res, next) => {
  const autenticateHeader = req.headers["authorization"];
  if (!autenticateHeader) {
    return res.status(401).send({ respuesta: "No hay token" });
  }
  //extraer token
  const token = autenticateHeader.split(" ")[1];

  try {
    const dataUser = jwt.verify(token, process.env.SECRET_KEY);
    req.data = dataUser;
    next();
  } catch (error) {
    return res.status(401).send({ respuesta: "Token invalido" });
  }
};

export default { validateToken };
