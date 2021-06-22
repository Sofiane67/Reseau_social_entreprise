const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const auth = require('../middleware/auth');

router.post("/:postId", commentController.addComment);
router.put("/:commentId", commentController.editComment);
router.delete("/:commentId", commentController.deleteComment);
router.get("/:commentId", commentController.getAllComments);

module.exports = router;