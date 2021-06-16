const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/file.config");

router.post("/:forumId", auth, multer, postController.addPost);
router.put("/:forumId/:postId", auth, multer, postController.editPost)
router.delete("/:forumId/:postId", auth, postController.deletePost)
router.get("/", auth, postController.getAllPosts);
router.get("/:forumId/:postId", auth, postController.getPost);

module.exports = router;