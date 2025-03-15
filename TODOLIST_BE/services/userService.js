import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const getUser = async () => {
  const data = await prisma.user.findMany();
  return data;
};
const createUser = async (body) => {
  body.password = await hashPassword(body.password);
  const data = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });
  return data;
};
const updateUser = async (_id, body) => {
  const data = await prisma.user.update({
    where: {
      id: _id,
    },
    data: {
      name: body.name,
      email: body.email,
      password: body.password,
    },
  });

  return data;
};
const deleteUser = (_id) => {
  const data = prisma.user.delete({
    where: {
      id: _id,
    },
  });
  return data;
};

const login = async (body) => {
  const { email, password } = body;
  let respuesta = "";
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    const match = await comparePassword(password, user.password);
    if (match) {
      const dataUser = { ...user, password: "" };
      /* const dataUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: "",
      }; */
      const token = jwt.sign(dataUser, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      respuesta = token;
    } else {
      respuesta = false;
    }
  }

  return respuesta;
};

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
