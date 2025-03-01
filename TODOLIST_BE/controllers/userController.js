import userService from "../services/userService.js";

const getUser = (req, res) => {
  const data = userService.getUser();
  res.send(data);
};

const createUser = (req, res) => {
  const body = req.body;
  const data = userService.createUser(body);
  res.send(data);
};

const updateUser = (req, res) => {
  const body = req.body;
  const _id = req.params.id;
  const data = userService.updateUser(_id, body);
  res.send(data);
};

const deleteUser = (req, res) => {
  const _id = req.params.id;
  const data = userService.deleteUser(_id);
  res.send(data);
};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
