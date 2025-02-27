const getUser = (req, res) => {
  res.send({
    user: {
      name: "jhon",
      lastname: "mendex",
    },
  });
};

const createUser = (req, res) => {
  const body = req.body;
  console.log(body);
  res.send({
    message: "usuario creado",
    user: body,
  });
};

const updateUser = () => {};

const deleteUser = () => {};

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
