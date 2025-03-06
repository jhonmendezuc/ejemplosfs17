/*
const tasks = [
  {
    id: 1,
    title: "programar",
    description: "realiar el curso de programacion",
    status: true,
  },
  {
    id: 2,
    title: "cocinar",
    description: "realiar el curso de programacion",
    status: false,
  },
  {
    id: 3,
    title: "limpiar",
    description: "realiar el curso de programacion",
    status: false,
  },
]; */
import DataAccess from "../db.js";
const dataAccess = new DataAccess();
const collectionName = "task";
(async () => {
  await dataAccess.connect();
})();

const getTask = async () => {
  const data = await dataAccess.findAll(collectionName);
  return data;
};
const createTask = async (body) => {
  //tasks.push(body);
  const data = await dataAccess.insertOne(collectionName, body);
  return data;
};
const updateTask = (_id, body) => {
  const index = tasks.findIndex((user) => user.id == _id);
  console.log(index);
  tasks[index] = body;
  return { resultado: "tarea actualizado" };
};
const deleteTask = (_id) => {
  const index = tasks.findIndex((user) => user.id == _id);
  tasks.splice(index, 1);
  return { resultado: "tarea eliminado" };
};
const login = (body) => {
  const user = tasks.find(
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
