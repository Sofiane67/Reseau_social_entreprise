const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xssClean = require("xss-clean");

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

module.exports = app;