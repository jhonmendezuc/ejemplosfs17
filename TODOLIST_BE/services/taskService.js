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
];

const getTask = () => {
  return tasks;
};
const createTask = (body) => {
  tasks.push(body);
  return { resultado: "tarea agregado" };
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
