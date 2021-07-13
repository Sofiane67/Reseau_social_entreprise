# Pour commencer

## 1. Créer une base de donnée MySQL appelé `groupomania`

## 2. Installer nodemon : `npm install -g nodemon`

## 3. Cloner le projet

## 4. Renommer les fichier `.env.dist` en `.env`

### .env du dossier backend

Renseigner les constantes `USER_NAME`, `PASSWORD` et `SECRET`

### .env du dosser frontend

Ajouter comme valeur à la constante REACT_APP_KEY_API  votre clé API pour utiliser l'api tenor

## 5. Se rendre dans le dossier backend et lancer dans le terminal la commande `nodemon server`

Le lancement du serveru créera automatiquement les tables de la base de données

## 6. Préparation de la base de données

Afin que l'application fonctionne, il est nécéssaire de créer certaines données via Postman

### Utilisation de Postman

#### Création des forums

Effectuer 2 requêtes post pour créer les 2 forums mutlimedia et text: http://localhost:3000/api/forum

Body : 
1. `{
        "forumType": "multimedia"
    }`

2. `{
        "forumType": "text"
    }`

#### Création des roles

Effectuer 2 requêtes post pour créer les 2 roles (moderateur et membre): http://localhost:3000/api/role

Body : 
1. `{
        "roleName": "moderateur"
    }`

2. `{
        "roleName": "membre"
    }`


#### Création du profil modérateur

Effectuer une requête post : http://localhost:3000/api/auth/signup

Body : 
`{
    "name": "Groupomania",
    "firstName": "Moderateur",
    "email" : "moderateur@groupomania.fr",
    "password": "moderateur",
    "roleId": 1
}`

## 7. Se rendre dans le dossier frontend et lancer dans le terminal la commande `npm start`