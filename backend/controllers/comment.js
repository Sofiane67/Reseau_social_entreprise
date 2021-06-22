const Comment = require("../models/comment");

exports.addComment = (req, res, next) => {
    const postId = req.params.postId;
    req.body.text = req.body.text === "" ? null : req.body.text;
    Comment.create({
        ...req.body,
        postId,
        userId: req.user.id
    })
    .then( () => res.status(201).json({ message: "Nouveau commentaire ajouté" }))
    .catch(error => res.status(500).json({ error }))
};

exports.editComment = (req, res, next) => {
    const commentId = req.params.commentId;
    Comment.findByPk(commentId)
    .then(comment => {
        comment.text = req.body.text;
        return comment.save();
    })
    .then(() => res.status(200).json({ message: "Commentaire modifié" }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteComment = (req, res, next) => {
    const commentId = req.params.commentId;
    Comment.findByPk(commentId)
        .then(comment => {console.log(comment); return comment.destroy()})
        .then(() => res.status(200).json({ message: "Commentaire supprimé" }))
        .catch(error => res.status(400).json({ error }));
}

exports.getAllComments = (req, res, next) => {
    
}