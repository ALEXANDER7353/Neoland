const express = require("express");
const authenticate = require("../middlewares/auth");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const router = express.Router();

router.post("/", createUser);

router.get("/:id", authenticate, readUser);

router.put("/:id", authenticate, updateUser);

router.delete("/:id", authenticate, deleteUser);

module.exports = router;
