import Form from "../Form/Form";

import classes from "./LoginForm.module.scss";

const LoginForm = () => {

    return (
        <section className={classes["login-section"]}>
            <h1 className={classes["login-section__h1"]} >
                Connexion
            </h1>
            <Form page="login" />
        </section>
    );
};

export default LoginForm;