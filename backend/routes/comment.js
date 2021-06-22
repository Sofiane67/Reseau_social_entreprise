const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const auth = require('../middleware/auth');

router.post("/:forumId/:postId", commentController.addComment);
router.put("/:commentId", commentController.editComment);
router.delete("/:forumId/:postId", commentController.deleteComment);
router.get("/:forumId/:postId", commentController.getAllComments);

module.exports = router;