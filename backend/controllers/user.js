const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const { name, firstName, email} = req.body;
        User.create({
            name,
            firstName,
            email,
            password: hash
        })
        .then(() => res.status(201).json({message : "Utilisateur créé"}))
        .catch(error => res.status(500).json({error}))
    })
}