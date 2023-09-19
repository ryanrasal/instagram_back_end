const AuthManager = require("../../model/AuthManager");

async function loginController(req, res) {
  const { status, userConnect, message } = await AuthManager.login(req.body);

  return res.status(status).json({ message, userConnect });
}

module.exports = loginController;
