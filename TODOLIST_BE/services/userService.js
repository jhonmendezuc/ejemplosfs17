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

const getUser = () => {
  return users;
};
const createUser = (body) => {
  users.push(body);
  return { resultado: "usuario agregado" };
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
