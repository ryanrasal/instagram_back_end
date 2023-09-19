const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: "public/uploads/" });

const fileControllers = require("../controllers/fileControllers");

const readUserController = require("../controllers/userControllers/ReadUserController");

const searchUserController = require("../controllers/userControllers/SearchUserController");

const createUserController = require("../controllers/userControllers/CreateUserController");

const deleteUserController = require("../controllers/userControllers/DeleteUserController");

/* GET : fetch all users . */
router.get("/", readUserController);

/* GET : fetch all users . */
router.get("/search", searchUserController);

router.post(
  "/",
  upload.single("picture"),
  fileControllers.fileRename,
  createUserController
);

/* GET : fetch all users . */
router.delete("/:id", deleteUserController);

module.exports = router;
