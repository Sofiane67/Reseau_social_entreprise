const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Post = require("../models/post");
const fs = require("fs");
require("dotenv").config();

/**
 * Création d'un compte utilisateur avec cryptage du password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.signup = (req, res, next) => {
    const { name, firstName, email, password, roleId} = req.body;
    
    bcrypt.hash(password, 10)
    .then(hash => {
        if(!name){
            return res.status(500).json({ error: { errors: [{ message: "Le nom n'est pas renseigné" }] } });
        }else if(!firstName){
            return res.status(500).json({ error: { errors: [{ message: "Le prénom n'est pas renseigné" }] } });
        }else if(!email){
            return res.status(500).json({ error: { errors: [{ message: "L'email n'est pas renseigné" }] } });
        }else if(!password){
            return res.status(500).json({ error: { errors: [{ message: "Le mot de passe n'est pas renseigné" }] } });
        }

        User.create({
            name: name.trim(),
            firstName: firstName.trim(),
            email: email.trim(),
            password: hash,
            roleId
        })
        .then(() => res.status(201).json({message : "Votre compte a bien été créé"}))
        .catch(error => res.status(500).json({error}))
    })
};

/**
 * Contrôle l'authentification et crée un token si l'identifiant et le mot de passe sont correct
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.login = (req, res, next) => {
    const {email, password} = req.body;

    User.findAll({where: {email: email}})
    .then(([user]) => {
        
        if (!user) return res.status(401).json({ error: "Identifiant invalide" });

        bcrypt.compare(password, user.password)
            .then(valid => {
                if (!valid) return res.status(401).json({ error: "Identifiant invalide" });

                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                        { userId: user.id },
                        process.env.SECRET,
                        { expiresIn: "24h" }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));

    })
    .catch(error => res.status(401).json({error}))
};

exports.getUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }))
}

exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
    .then(user => {
        Post.findAll({where: {userId}})
        .then(posts => {
            posts.map(post => {
                if (post.imageUrl) {
                    const filename = post.imageUrl.split("/images/")[1];
                    fs.unlink(`images/${filename}`, () => {
                        return;
                    })
                }
            })
        });
        return user.destroy()
    })
    .then(() => res.status(200).json({ message: "Compte supprimé" }))
    .catch(error => res.status(400).json({ error }));
}

exports.editUser = (req, res, next) => {
    const userId = req.params.userId;
    User.findByPk(userId)
    .then(user =>  {
        if(req.body.password){
            bcrypt.compare(req.body.password, user.password)
            .then(isSame => {
                if(isSame){
                    delete req.body.password;
                }
            })
        }
        return user;
    })
    .then(user =>{

        for (const prop in req.body) {
            user[prop] = req.body[prop];
        }
        return user
    })
    .then(user => {
       if(req.body.password){
           bcrypt.hash(req.body.password, 10)
           .then(hash => {
               user.password = hash
               return user;
            })
       }else{
           return user
       }
    })
    .then(user => {
        user.save()
        .then(user => res.status(200).json({user, message: "Profil modifié"}))
        .catch(error => res.status(500).json({ error }));
    })
    
}