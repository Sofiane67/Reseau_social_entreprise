//Initialisation des champs formulaire pour la page Sign Up
export const formFieldLogin = [
    {
        htmlFor: "email",
        label: "Email",
        type: "email",
        name: "email",
        id: "email"
    },
    {
        htmlFor: "password",
        label: "Mot de passe",
        type: "password",
        name: "password",
        id: "password"
    }
];

export const formFieldsSignUp = [
    {
        htmlFor: "name",
        label: "Nom",
        type: "text",
        name: "name",
        id: "name"
    },
    {
        htmlFor: "firstName",
        label: "Prénom",
        type: "text",
        name: "firstName",
        id: "firstName"
    },

    ...formFieldLogin
]; 

