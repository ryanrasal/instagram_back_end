const LikeManager = require("../../model/LikeManager");
const qs = require("qs");

async function readLikeController(req, res) {
  const { userId } = req.query;

  const { publicationId } = req.query;

  const { status, message } = await LikeManager.fetchLikePublication(
    userId,
    publicationId
  );

  return res.status(status).json(message);
}

module.exports = readLikeController;
