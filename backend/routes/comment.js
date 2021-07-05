const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");
const auth = require('../middleware/auth');

router.post("/:postId", auth, commentController.addComment);
router.put("/:commentId", auth, commentController.editComment);
router.delete("/:commentId", auth, commentController.deleteComment);
router.get("/:commentId", auth, commentController.getAllComments);

module.exports = router;