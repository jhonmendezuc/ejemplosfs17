import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTask = async () => {
  const data = await prisma.task.findMany();
  return data;
};

const createTask = async (body) => {
  const data = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
      user: {
        connect: {
          id: body.userId,
        },
      },
    },
  });
  return data;
};
const updateTask = async (_id, body) => {
  return await prisma.task.update({
    where: {
      id: _id,
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
    },
  });
};
const deleteTask = async (_id) => {
  const data = await prisma.task.delete({
    where: {
      id: _id,
    },
  });
  return data;
};
const login = async (body) => {
  const user = await tasks.find(
    (user) => user.email === body.email && user.password === body.password
  );
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
  login,
};
