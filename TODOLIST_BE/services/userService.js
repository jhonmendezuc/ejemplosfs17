/*
const users = [
  {
    id: 1,
    name: "john",
    email: "jhon@gmail.com",
    password: "123",
  },
  {
    id: 2,
    name: "jane",
    email: "jane@gmail.com",
    password: "123",
  },
];
*/
import DataAccess from "../db.js";

const dataAccess = new DataAccess();
const collectionName = "user";
(async () => {
  await dataAccess.connect();
})();
const getUser = async () => {
  const data = await dataAccess.findAll(collectionName, {});
  return data;
};
const createUser = async (body) => {
  //users.push(body);
  const data = await dataAccess.insertOne(collectionName, body);
  return data;
};
const updateUser = (_id, body) => {
  const index = users.findIndex((user) => user.id == _id);
  console.log(index);
  users[index] = body;
  return { resultado: "usuario actualizado" };
};
const deleteUser = (_id) => {
  const index = users.findIndex((user) => user.id == _id);
  users.splice(index, 1);
  return { resultado: "usuario eliminado" };
};
const login = (body) => {
  const user = users.find(
    (user) => user.email === body.email && user.password === body.password
  );
};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
