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
        
        if (!user) return res.status(401).json({ error: "L'adresse email n'existe pas" });

        bcrypt.compare(password, user.password)
            .then(valid => {
                if (!valid) return res.status(401).json({ error: "Mot de passe incorrect" });

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