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

export const formFieldsSignUp = {
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

/**
 * Cette fonction permet de paramétrer une requête Http. Permet d'ajouter des headers et des données dans le corps d'une requête POST ou uniquement l'url de l'api pour une requête GET
 * @param {String} url  Route de l'API vers laquelle effectuer une requête Http
 * @param {Object} body Données à envoyer dans le corps de la requête
 * @returns Object
 */
export const requestSettings = (url, body=null) => {
    if(body){
        return {
            url,
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(body)
        }
    }else{
        return {url}
    }
};

/**
 * Cette fonction retourne une fonction qui met à jour le state pour stocker la valeur d'un input
 * @param {String} fieldName Nom du champ input
 * @param {Function} setState Fonction retourné par useState pour la mettre à jour l'etat qui stock la valeur d'un input
 * @returns Function
 */
export const getInputValue = (fieldName, setState) => {
    return (fieldName) => setState(fieldName);
};

/**
 * 
 * @param {Function} setData Fonction retourné par useState pour mettre à jour le state qui stock les datas envoyé lors de la soumission du formulaire
 * @param {Function} setFormIsSend Fonction retourné par useState pour mettre à jour le state qui indique si le formulaire a été soumis ou non
 * @returns 
 */
export const onSubmitFormHelper = (setData, setFormIsSend) => {
    return (data, isSend) => {
        setData(data);
        setFormIsSend(isSend);
    }
};