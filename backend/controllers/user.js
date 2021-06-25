const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Création d'un compte utilisateur avec cryptage du password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.signup = (req, res, next) => {
    console.log(req.body)
    const { name, firstName, email, password } = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        
        User.create({
            name,
            firstName,
            email,
            password: hash
        })
        .then(() => res.status(201).json({message : "Utilisateur créé"}))
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
    .then(user => user.destroy())
    .then(() => res.status(200).json({ message: "Utilisateur supprimé" }))
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
       if(user.password){
           bcrypt.hash(user.password, 10)
           .then(hash => {
               user.password = hash
               user.save();
               return res.status(200).json(user)
            })
       }else{
           user.save();
           return res.status(200).json(user);
       }
    })
}