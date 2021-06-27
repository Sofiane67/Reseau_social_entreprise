const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/comment");
const fs = require("fs");

exports.addPost = (req, res, next) => {
    const forumId = req.params.forumId;
    req.body.imageUrl = req.file ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}` : req.body.imageUrl;
    req.body.text = req.body.text === "" ? null : req.body.text;
    req.user.createPost({ ...req.body })
        .then(post =>{ 
            post.setForum(forumId);
            res.status(201).json({ message: "Nouveau post créé" });
        })
    .catch(error => res.status(500).json({ error }))
};

exports.editPost = (req, res, next) => {
    const postId = req.params.postId;
    req.body.imageUrl = req.file ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}` : req.body.imageUrl;

    Post.findByPk(postId)
    .then(post => {
        if (!req.body.imageUrl) return post;
        if (post.imageUrl) {
            const filename = post.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                return;
            });
        }
        return post;
    })
    .then(post => {
        if (req.body.text) post.text = req.body.text;
        post.imageUrl = req.body.imageUrl;
        return post.save();
    })
    .then(() => res.status(200).json({message: "Post modifié"}))
    .catch(error => res.status(400).json({error}));
}

exports.deletePost = (req,res,next) => {
    const postId = req.params.postId;

    Post.findByPk(postId)
    .then(post => {
        post.destroy();
        return post;
    })
    .then(post => {

        if(post.imageUrl){
            const filename = post.imageUrl.split("/images/")[1];
            fs.unlink(`images/${filename}`, () => {
                return;
            })
        }
    })
    .then(() => res.status(200).json({message: "Post supprimé"}))
    .catch(error => res.status(400).json({error}));
}

exports.getAllPosts = (req, res, next) => {
    Post.findAll(
        {
            include: [
                User, {
                    model: Comment,
                    include:[User],
                    order: [["createdAt", 'DESC']]
                }
            ],
            order: [
                ["createdAt",'DESC'],
                [Comment, "createdAt", "DESC"]
            ]
        }
    )
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}))
};

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findByPk(postId)
    .then(product => res.status(200).json(product))
    .catch(error => res.status(400).json({error}))
};