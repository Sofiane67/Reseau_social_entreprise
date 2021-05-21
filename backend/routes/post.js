const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");
const auth = require("../middleware/auth");

router.post("/:forumId/addNewPost", auth, postController.addPost);
router.put("/edit/:postId", auth, postController.editPost)
router.delete("/delete/:postId", auth, postController.deletePost)
router.get("/", auth, postController.getAllPosts);
router.get("/:postId", auth, postController.getPost);

module.exports = router;
