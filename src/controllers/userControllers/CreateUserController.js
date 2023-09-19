const UserManager = require("../../model/UserManager");

async function createUserController(req, res) {
  const dataPostSignup = JSON.parse(req.body.dataPostSignup);

  const { renamedFile } = req;

  dataPostSignup.image = renamedFile;

  const { status, message } = await UserManager.insertUser(dataPostSignup);

  return res.status(status).json(message);
}

module.exports = createUserController;
