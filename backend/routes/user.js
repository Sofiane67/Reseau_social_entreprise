const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.delete("/:userId", auth, userController.deleteUser)
router.get("/:userId", auth,userController.getUser);
router.put("/:userId", auth, userController.editUser);

module.exports = router;