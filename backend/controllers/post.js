const Post = require("../models/post");
const User = require("../models/user");

exports.addPost = (req, res, next) => {
    const forumId = req.params.forumId;
    req.body.imageUrl = req.file ? `${req.protocol}://${req.get("host")}/images/${req.file.filename}`: null;
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
    console.log(postId)
    Post.findByPk(postId)
    .then(post => {
        post.text = req.body.text;
        post.imageUrl = req.body.imageUrl;

        return post.save();
    })
    .then(() => res.status(200).json({message: "Post modifié"}))
    .catch(error => res.status(400).json({error}));
}

exports.deletePost = (req,res,next) => {
    const postId = req.params.postId;

    Post.findByPk(postId)
    .then(post => post.destroy())
    .then(() => res.status(200).json({message: "Post suppimé"}))
    .catch(error => res.status(400).json({error}));
}

exports.getAllPosts = (req, res, next) => {
    Post.findAll({include: User})
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({error}))
};

exports.getPost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findByPk(postId)
    .then(product => res.status(200).json(product))
    .catch(error => res.status(400).json({error}))
};