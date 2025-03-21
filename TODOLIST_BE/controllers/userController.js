import userService from "../services/userService.js";

const getUser = async (req, res) => {
  const data = await userService.getUser();
  res.send(data);
};

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.send(data);
};

const updateUser = async (req, res) => {
  const body = req.body;
  const _id = req.params.id;
  const data = await userService.updateUser(_id, body);
  res.send(data);
};

const deleteUser = async (req, res) => {
  const _id = req.params.id;
  const data = await userService.deleteUser(_id);
  res.send(data);
};

const login = async (req, res) => {
  const body = req.body;
  const data = await userService.login(body);
  if (data) {
    res.send({ token: data });
  } else {
    const respuesta = { mensaje: "❌ usuario o contraseña incorrectos" };
    res.status(401).send(respuesta);
  }
};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
};
