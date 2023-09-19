const UserManager = require("../../model/UserManager");

async function deleteUserController(req, res) {
    console.warn("coucou")
  const { status, message } = await UserManager.deleteUser(
    req.params.id
  );

  return res.status(status).json(message);
}

module.exports = deleteUserController;
