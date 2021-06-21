const Comment = require("../models/comment");

exports.addComment = (req, res, next) => {
    const postId = req.params.postId;
    req.body.text = req.body.text === "" ? null : req.body.text;
    console.log(req.body)
    Comment.create({
        ...req.body,
        postId,
        userId: req.user.id
    })
    .then( () => res.status(201).json({ message: "Nouveau commentaire ajouté" }))
    .catch(error => res.status(500).json({ error }))
};

exports.editComment = (req, res, next) => {

};

exports.deleteComment = (req, res, next) => {

}

exports.getAllComments = (req, res, next) => {
    
}