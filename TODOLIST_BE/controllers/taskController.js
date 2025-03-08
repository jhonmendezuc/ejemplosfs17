import taskService from "../services/taskService.js";

const getTask = async (req, res) => {
  const data = await taskService.getTask();
  res.send(data);
};

const createTask = async (req, res) => {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.send(data);
};

const updateTask = async (req, res) => {
  const body = req.body;
  const _id = req.params.id;
  const data = await taskService.updateTask(_id, body);
  res.send(data);
};

const deleteTask = async (req, res) => {
  const _id = req.params.id;
  const data = await taskService.deleteTask(_id);
  res.send(data);
};

export default {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
