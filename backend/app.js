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

const userRoutes = require("./routes/user");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

//Limitation du nombre de requête par IP
const limiter = rateLimit({
    max: 100,
    windowMs: 60*60*1000,
    message: "Un nombre important de requête a été effectué depuis cette adresse IP, veuillez réessayer dans 1 heure"
});

//Définit des en-tête HTTP sécurisés
app.use(helmet());

// app.use("/", limiter);

app.use(express.json());

//Protection contre les attaques XSS
app.use(xssClean());

app.use("/api/auth", userRoutes);

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