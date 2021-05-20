const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.post("/:forumId/addNewPost", postController.addPost);
router.put("/edit/:postId", postController.editPost)
router.delete("/delete/:postId", postController.deletePost)
router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPost);

module.exports = router;
