const UserManager = require("../../model/UserManager");

async function searchUserController(req, res) {
  const { userName } = req.query;
  const { userEmail } = req.query;

  const { status, message } = await UserManager.fetchSearchUser(
    userName,
    userEmail
  );

  return res.status(status).json(message);
}

module.exports = searchUserController;
