import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
const login = (body) => {
  const user = users.find(
    (user) => user.email === body.email && user.password === body.password
  );
};

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
