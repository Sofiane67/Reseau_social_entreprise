const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");


const Role = require("./models/role");
const User = require("./models/user");
const Forum = require("./models/forum");
const Post = require("./models/post");
const Comment = require("./models/comment");
const Sharing = require("./models/sharing");

const app = express();

//Limitation du nombre de requête par IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60*60*1000,
    message: "Un nombre important de requête a été effectué depuis cette adresse IP, veuillez réessayer dans 1 heure"
});

//Définit des en-tête HTTP sécurisés
app.use(helmet());

app.use("/", limiter);

app.use(express.json());

//Protection contre les attaques XSS
app.use(xssClean());

//INITIALISATION DES ASSOCIATIONS ENTRE TABLES 

//un User ne peut avoir qu'un seul Role
User.belongsTo(Role);
//un User peut publier plusieurs Posts
User.hasMany(Post);
//un User peut partager plusieurs Post et un Post peut être partagé plusieurs fois
User.belongsToMany(Post, {through: Sharing});
//un User peut commenter plusieurs Post et un Post peut être commenté plusieurs fois
User.belongsToMany(Post, { through: Comment });
//un Post est publié sur un seul forum
Post.belongsTo(Forum);

module.exports = app;