const UserManager = require("../../model/UserManager");
const qs = require("qs");

async function readUserController(req, res) {
  const { status, message } = await UserManager.fetchUser();

  return res.status(status).json(message);
}

module.exports = readUserController;
