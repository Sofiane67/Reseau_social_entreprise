//Initialisation des champs formulaire pour la page Sign Up
export const formFieldLogin = {
    email: {
        htmlFor: "email",
        label: "Email",
        type: "email",
        name: "email",
        id: "email",
    },
    password: {
        htmlFor: "password",
        label: "Mot de passe",
        type: "password",
        name: "password",
        id: "password",
    }
};

export const formFieldSignUp = {
    name: {
        htmlFor: "name",
        label: "Nom",
        type: "text",
        name: "name",
        id: "name",
    },
    firstName: {
        htmlFor: "firstName",
        label: "Prénom",
        type: "text",
        name: "firstName",
        id: "firstName",
    },

    ...formFieldLogin
};

export const formFieldPost = {
    text: {
        name: "text",
        placeholder: "Quoi de neuf ?"
    },
    imageUrl: {
        name: "imageUrl",
        id: "imageUrl",
        type: "url"
    },
    imageFile: {
        name: "imageUrl",
        id: "imageUrl",
        accept: "image/jpg, image/jpeg, image/png, image/gif"
    }
};