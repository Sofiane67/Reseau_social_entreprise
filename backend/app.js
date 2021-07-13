const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");
const path = require("path");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const Role = require("./models/role");
const User = require("./models/user");
const Forum = require("./models/forum");
const Post = require("./models/post");
const Comment = require("./models/comment");

const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const commentRoutes = require("./routes/comment");
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

app.use("/", limiter);

app.use(express.json());

//Protection contre les attaques XSS
app.use(xssClean());

app.post("/api/forum", (req, res, next) => {
    const forumType = req.body.forumType;
    Forum.create({forumType}).then(() => res.status(201).json({message: "nouveau forum créé"})).catch(err => res.status(500).json({err}))
});

app.post("/api/role", (req, res, next) => {
    const roleName = req.body.roleName;
    Role.create({ roleName }).then(() => res.status(201).json({ message: "nouveau role créé" })).catch(err => res.status(500).json({ err }))
});

let userId;
app.use((req, res, next) => {
    if (typeof req.headers.authorization === "string"){
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET, (error, decode) => {
            if (error) {
                res.status(401).json({ error })
            }else{
                userId = decode.userId
            }
        });
    };
    next();
});

app.use((req, res, next) => {
    User.findByPk(userId).then(user => {
        req.user = user;
        next();
    }).catch(err => console.log(err));
})

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

//INITIALISATION DES ASSOCIATIONS ENTRE TABLES 

//un User ne peut avoir qu'un seul Role
User.belongsTo(Role);
//un User peut publier plusieurs Posts
User.hasMany(Post, { onDelete: "cascade" });
Post.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Comment, { onDelete: "cascade"});
Comment.belongsTo(User, {foreignKey:"userId"});
Post.hasMany(Comment, {onDelete: "cascade"});
Comment.belongsTo(Post, { foreignKey: "postId" })

//un Post est publié sur un seul forum
Post.belongsTo(Forum);

module.exports = app;