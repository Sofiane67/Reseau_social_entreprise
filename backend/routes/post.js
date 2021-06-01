const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/:forumId",auth, postController.addPost);
router.put("/:forumId/:postId", auth, postController.editPost)
router.delete("/:forumId/:postId", auth, postController.deletePost)
router.get("/", auth, postController.getAllPosts);
router.get("/:forumId/:postId", auth, postController.getPost);

module.exports = router;